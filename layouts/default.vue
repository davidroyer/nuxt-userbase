<template>
  <div>
    <SiteHeader />
    <b-container>
      <Nuxt />
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
html {
  -moz-osx-font-smoothing3: grayscale;
  -webkit-font-smoothing: antialiased;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
