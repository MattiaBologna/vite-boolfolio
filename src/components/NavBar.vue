<template>
    <header class="py-5 bg-body-tertiary mb-4">
        <div class="container">
            <div class="d-flex justify-content-between">
                <RouterLink class="navbar-brand fs-1" :to="{ name: 'home' }">Boolfolio</RouterLink>
                <nav class="d-flex gap-3">
                    <RouterLink :class="$route.fullPath === '/' ? 'text-danger' : ''" class=" nav-link fs-4"
                        :to="{ name: 'home' }">
                        Home
                    </RouterLink>
                    <RouterLink :class="$route.fullPath === '/portfolio' ? 'text-danger' : ''" class="nav-link fs-4"
                        :to="{ name: 'portfolio' }">
                        Portfolio
                    </RouterLink>
                    <RouterLink :class="$route.fullPath === '/contact' ? 'text-danger' : ''" class="nav-link fs-4"
                        :to="{ name: 'contact' }">
                        Contact
                    </RouterLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    unmounted() {
        console.log(this.$route)
    }
}
</script>

<style lang="scss" scoped></style>