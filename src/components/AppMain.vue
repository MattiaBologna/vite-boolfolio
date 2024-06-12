<template>
    <div>
        <h2>Projects</h2>
        <ul class="list-unstyled">
            <ProjectCard v-for="project in projects" key="project.id" :project="project" />
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
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: 1
                }
            }).then(res => {
                console.log(res.data.projects.data)
                this.projects = res.data.projects.data
            })
        }
    },
    created() {
        this.fetchProjects()
    }
}
</script>

<style lang="scss" scoped></style>