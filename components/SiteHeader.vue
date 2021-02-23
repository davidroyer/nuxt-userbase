<template>
  <header class="bg-primary text-light">
    <b-container>
      <b-row align-v="center" align-h="between">
        <b-col cols="auto" class="py-2 px-2">
          <h1
            class="site-title ml-2"
            @click="$router.push('/')"
            v-text="`Nudo`"
          />
        </b-col>

        <b-col cols="auto" class="py-2 px-2">
          <template v-if="!$store.state.user">
            <b-button variant="primary" to="/signup">Sign Up</b-button>
            <b-button variant="primary" to="/login">Login</b-button>
          </template>
          <template v-else>
            <b-button
              variant="primary"
              @click="$store.dispatch('signOut')"
              v-text="`Logout`"
            />
          </template>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
