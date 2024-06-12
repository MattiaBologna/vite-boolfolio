<template>
  <h1 class="container">
    {{ message }}
  </h1>
  <AppMain />
</template>

<script>
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppMain,
  },
  data() {
    return {
      message: 'Ciao mondo'
    }
  }
}
</script>

<style lang="scss" scoped></style>