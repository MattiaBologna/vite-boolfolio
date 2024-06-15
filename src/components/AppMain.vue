<template>
    <div class="container">
        <div class="portfolio-nav d-flex justify-content-between align-items-center">
            <h2 class="display-2 mb-5">Projects</h2>
            <input v-model="searchProject" style="max-width: 500px;" type="text" placeholder="Search project"
                class="form-control">
        </div>
        <ul class="list-unstyled">
            <ProjectCard v-for="project in filteredProjects" key="project.id" :project="project" class="mb-5"
                @change="fetchProjects" />
        </ul>
        <div class="pagination_selectors d-flex gap-5 justify-content-between align-items-start mb-4">
            <div class="per_page_select d-flex gap-3">
                <select v-model="projectsPerPage" name="projects_pagination" id="projects_pagination"
                    class="form-select" style="max-width: 100px;" @change="fetchProjects">
                    <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                </select>
                <label for="projects_pagination">Projects per page</label>
            </div>
            <ul v-if="!searchProject || projects.length > 6" class="d-flex gap-3  list-unstyled">
                <li :class="n === currentPage ? 'btn-dark' : 'btn-light'" class="btn" @click="changePage(n)"
                    v-for="n in lastPage" :key="n">{{ n }}</li>
            </ul>
        </div>
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
            currentPage: 1,
            searchProject: '',
            projectsPerPage: 10
        }
    },
    computed: {
        filteredProjects() {
            // TODO only looks in the page you're currently displaying
            if (!this.searchProject) {
                return this.projects
            }
            return this.projects.filter((project) =>
                project.title.toLowerCase().includes(this.searchProject.toLocaleLowerCase()))
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentPage,
                    per_page: this.projectsPerPage
                }
            }).then(res => {
                // console.log(res.data.projects.data)
                this.projects = res.data.projects.data
                console.log(this.projects)
                this.lastPage = res.data.projects.last_page
            })
        },
        changePage(n) {
            if (n === this.currentPage) return
            this.currentPage = n
            this.fetchProjects()
        }
    },
    created() {
        this.fetchProjects()
    }
}
</script>

<style lang="scss" scoped></style>