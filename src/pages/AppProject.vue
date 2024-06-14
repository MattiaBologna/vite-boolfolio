<template>
    <div class="container">
        <button @click="goBack" class="btn btn-danger float-end">Back</button>
    </div>
    <template v-if="project">
        <div class="container mt-4">
            <h2>{{ project.title }}</h2>
            <p>Description: {{ project.description }}</p>
            <a class="link-danger link-underline link-underline-opacity-0" href="{{ project.link }}">Github link</a>
            <ProjectTags :technologies="project.technologies" />

        </div>
    </template>
</template>

<script>
import axios from 'axios';
import ProjectTags from '../components/ProjectTags.vue'

export default {
    data() {
        return {
            project: null
        }
    },
    components: {
        ProjectTags
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    methods: {
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`).then(res => {
                console.log(res.data)
                this.project = res.data.project
            }).catch((err) => {
                this.$router.push({
                    name: 'not-found',
                    params: { pathMatch: this.$route.path.substring(1).split('/') }
                })
            })
        },
        goBack() {
            this.$router.back()
        }
    },
    created() {
        this.fetchProject()
    }
}
</script>

<style lang="scss" scoped></style>