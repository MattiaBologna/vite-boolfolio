<template>
    <div class="container">
        <h2 class="display-2 mb-5">Projects</h2>
        <ul class="list-unstyled">
            <ProjectCard v-for="project in projects" key="project.id" :project="project" class="mb-5" />
        </ul>
        <ul class="d-flex gap-3 mt-2 list-unstyled">
            <li :class="n === currentPage ? 'btn-dark' : 'btn-light'" class="btn" @click="changePage(n)"
                v-for="n in lastPage" :key="n">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import ProjectCard from './ProjectCard.vue'

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            lastPage: null,
            currentPage: 1
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentPage
                }
            }).then(res => {
                // console.log(res.data.projects.data)
                this.projects = res.data.projects.data
                this.lastPage = res.data.projects.last_page
            })
        },
        changePage(n) {
            if (n === this.currentPage) return
            this.currentPage = n
            console.log(this.currentPage)
            this.fetchProjects()
        }
    },
    created() {
        this.fetchProjects()
    }
}
</script>

<style lang="scss" scoped></style>