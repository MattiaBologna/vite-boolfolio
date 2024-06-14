<template>
    <div class="d-flex gap-2 mt-3">
        <div v-for="technology in technologies" class="btn btn-secondary text-white">
            {{ technology.name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        technologies: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped></style>