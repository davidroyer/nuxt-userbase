<template>
  <div>
    <h2>Private App</h2>
    <b-form-input
      v-model="newTodo"
      placeholder="Add To Your Todos"
      @keyup.enter="addTodo"
    />
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
    <hr />
    <nuxt-link to="/app/settings">Settings</nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  data: () => ({
    newTodo: ''
  }),

  methods: {
    async addTodo() {
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

<style></style>
