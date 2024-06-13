<template>
  <h1 class="p-3">
    {{ message }}
  </h1>
  <div class="container">
    <AppMain />
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'

export default {
  components: {
    AppMain,
  },
  data() {
    return {
      message: 'Boolfolio'
    }
  }
}
</script>

<style lang="scss" scoped></style>