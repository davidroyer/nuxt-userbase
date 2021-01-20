<template>
  <div class="mt-5">
    <div v-if="!$store.state.user">
      <b-button variant="primary" @click="handleSignUp">Sign Up</b-button>
      <b-button variant="primary" @click="handleSignIn">Sign In</b-button>
    </div>
    <div v-else>
      <div>
        <strong>Username: </strong>
        <span v-text="$store.state.user.username" />
      </div>
      <b-button
        v-if="$store.state.user.authToken"
        variant="danger"
        @click="handleLogout"
        >Logout</b-button
      >
    </div>
    <hr />

    <b-form-input
      v-model="newTodo"
      placeholder="Add To Your Todos"
      @keyup.enter="addTodo"
    ></b-form-input>
    <hr />
    <ul class="list-unstyled">
      <li
        v-for="{ item, itemId } in $store.state.todos"
        :key="itemId"
        class="mt-2"
      >
        <b-button class="mr-4" @click="deleteTodo(itemId)">Delete</b-button>
        {{ item.title }}
      </li>
    </ul>
    <pre>{{ $store.state.todos }}</pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    newTodo: ''
  }),

  methods: {
    handleSignUp() {
      this.$store.dispatch('signUpUser', {
        username: 'admin1',
        password: '@pw4admin1',
        email: 'droyer01@gmail.com',
        rememberMe: 'local'
      })
    },

    async handleSignIn() {
      await this.$store.dispatch('signInUser', {
        username: 'admin1',
        password: '@pw4admin1',
        rememberMe: 'local'
      })

      await this.$store.dispatch('initDatabase')
    },

    handleLogout() {
      this.$store.dispatch('logout')
    },

    async addTodo() {
      // eslint-disable-next-line no-console
      await this.$db.insertItem({
        databaseName: 'todos',
        item: { title: this.newTodo, desciption: '' }
      })

      this.newTodo = ''
    },

    async deleteTodo(id) {
      await this.$db.deleteItem({ databaseName: 'todos', itemId: id })
    }
  }
}
</script>
