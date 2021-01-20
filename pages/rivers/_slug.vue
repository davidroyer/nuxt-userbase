<template>
  <div class="page-river">
    <div class="btn-go-back">
      <b-icon-arrow-left-circle-fill
        class="btn-go-back-icon"
        font-scale="3"
        @click="$router.go(-1)"
      />
      <!-- <b-button size="md" variant="primary" class="rounded-circle">
      </b-button> -->
    </div>
    <h2 v-text="river.title" />
    <b-img fluid :src="river.image" :alt="`Image of the ${river.title}`" />
    <p v-text="river.description" />

    <hr />
    <pre>{{ river }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const river = await $axios.$get(`/rivers/${params.slug}`)
    return { river }
  },

  head() {
    return {
      title: this.river.title
    }
  }
}
</script>

<style>
.page-river {
  position: relative;
}
.btn-go-back {
  position: fixed;
  left: 20px;
  bottom: 20px;
}

.btn-go-back-icon {
  cursor: pointer;
}
</style>
