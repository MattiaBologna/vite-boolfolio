<template>
    <li class="d-flex justify-content-between align-items-center">
        <div class="project-infos">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <ProjectTags :technologies="project.technologies" />
        </div>
        <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }"
            class="btn btn-primary project-detail-btn">Detail</router-link>
    </li>
</template>

<script>
import ProjectTags from './ProjectTags.vue';

export default {
    components: {
        ProjectTags
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>