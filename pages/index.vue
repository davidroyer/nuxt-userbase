<template>
  <div>
    <h2>API Data</h2>
    <b-button variant="primary" @click="handleSignUp">Sign Up</b-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleSignUp() {
      this.$store.dispatch('signUpUser', {
        username: 'admin1',
        password: '@pw4admin1',
        email: 'droyer01@gmail.com',
        rememberMe: 'local'
      })
    }
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
