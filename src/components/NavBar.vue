<template>
    <header class="py-2 bg-grey">
        <div class="container">
            <div class="d-flex justify-content-between">
                <RouterLink to="/">Boolfolio</RouterLink>
                <nav class="d-flex gap-3">
                    <RouterLink :class="$route.fullPath === '/' ? 'text-danger' : ''" :to="{ name: 'home' }">Home
                    </RouterLink>
                    <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-danger' : ''"
                        :to="{ name: 'portfolio' }">Portfolio</RouterLink>
                    <RouterLink :class="$route.fullPath === '/contact' ? 'text-danger' : ''" :to="{ name: 'contact' }">
                        Contact</RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>