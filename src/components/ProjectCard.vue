<template>
    <li>
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <div class="d-flex gap-2">
            <div v-for="technology in project.technologies" class="btn btn-dark">
                {{ technology.name }}
            </div>
        </div>
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