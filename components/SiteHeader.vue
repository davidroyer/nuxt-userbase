<template>
  <header class="bg-primary text-light">
    <b-container>
      <b-row align-v="center">
        <b-col cols="auto" class="mr-auto p-3">
          <h1 v-text="`Site Header`" />
        </b-col>

        <b-col cols="auto" class="p-3">
          <b-button variant="primary" to="/">Home</b-button>
          <b-button variant="primary" to="/app">App</b-button>
          <template v-if="!$store.state.user">
            <!-- <b-button variant="primary" @click="handleSignUp">Sign Up</b-button> -->
            <b-button variant="primary" to="/signup">Sign Up</b-button>
            <b-button variant="primary" to="/login">Login</b-button>
          </template>
          <template v-else>
            <b-button variant="danger" @click="$store.dispatch('logout')">
              Logout
            </b-button>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
