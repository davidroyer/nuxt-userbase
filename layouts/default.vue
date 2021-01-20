<template>
  <div>
    <SiteHeader />
    <b-container>
      <Nuxt />
    </b-container>
  </div>
</template>

<script>
export default {
  // head() {
  //   return {
  //     titleTemplate: (titleChunk) => {
  //       // If undefined or blank then we don't need the hyphen
  //       return titleChunk ? `${titleChunk} - Site Title` : 'Site Title'
  //     },
  //   }
  // },
}
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
