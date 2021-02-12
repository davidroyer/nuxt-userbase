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
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translate(10px, 0);
}
</style>
