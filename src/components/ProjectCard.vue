<template>
    <li class="d-flex justify-content-between align-items-center">
        <div class="project-infos">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
            <div class="d-flex gap-2">
                <div v-for="technology in project.technologies" class="btn btn-dark">
                    {{ technology.name }}
                </div>
            </div>
        </div>
        <router-link :to="{ name: 'projects.show', params: { slug: project.slug } }"
            class="btn btn-primary project-detail-btn">Detail</router-link>
    </li>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>