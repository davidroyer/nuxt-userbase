<template>
  <div class="mt-5">
    <h2>Welcome</h2>
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
        rememberMe: 'local',
        sessionLength: 8760
      })
    }
  }
}
</script>
