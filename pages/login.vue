<template>
  <div>
    <h2>Login</h2>
    <b-button variant="primary" @click="handleSignIn">
      Login
      <b-spinner v-if="handlingSignIn" small></b-spinner>
    </b-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    handlingSignIn: false
  }),

  methods: {
    async handleSignIn() {
      this.handlingSignIn = true
      await this.$store.dispatch('signIn', {
        username: 'admin1',
        password: '@pw4admin1',
        rememberMe: 'local',
        sessionLength: 8760
      })

      this.handlingSignIn = false
      this.$router.push({ name: 'app' })
    }
  }
}
</script>

<style></style>
