<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
</template>

<script>
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue';

export default {
  components: {
    AppMain,
    NavBar
  },
  data() {
    return {
      message: 'Boolfolio'
    }
  }
}
</script>

<style lang="scss" scoped></style>