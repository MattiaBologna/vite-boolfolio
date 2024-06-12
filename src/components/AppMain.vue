<template>
    <div>
        <h2>Projects</h2>
        <ul class="list-unstyled">
            <li v-for="project in projects" :key="project.id">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <div class="d-flex gap-2">
                    <div v-for="technology in project.technologies" class="btn btn-dark">
                        {{ technology.name }}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
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