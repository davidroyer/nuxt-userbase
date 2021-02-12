<template>
  <b-row align-h="center">
    <b-col md="8" lg="6">
      <b-form-input
        v-model="newTodo"
        placeholder="Add To Your Todos"
        class="mt-4 mb-4 mt-md-5 mb-md-5"
        @keyup.enter="addTodo"
      />
      <b-list-group>
        <b-list-group-item
          v-for="todo in $store.state.todos"
          :key="todo.itemId"
          class="mt-2 d-flex justify-content-between"
          :class="{ completed: todo.completed }"
        >
          <b-form-checkbox
            :checked="todo.completed"
            class="mr-4 todo-checkbox"
            size="large"
            @change="updateTodoCompletion($event, todo)"
          >
            <div class="title flex-grow-1">{{ todo.title }}</div>
          </b-form-checkbox>
          <b-button size="sm" @click="deleteTodo(todo.itemId)">
            <b-icon icon="trash" />
          </b-button>
        </b-list-group-item>
      </b-list-group>

      <pre class="mt-5">{{ $store.state.todos }}</pre>
    </b-col>
  </b-row>
</template>

<script>
/* eslint-disable no-console */
export default {
  middleware: 'app-guard',

  data: () => ({
    newTodo: ''
  }),

  methods: {
    updateTodoCompletion(newValue, todo) {
      const { title, itemId } = todo

      this.updateTodo({
        itemId,
        item: {
          title,
          completed: newValue
        }
      })
    },

    async addTodo() {
      await this.$db.insertItem({
        databaseName: 'todos',
        item: { title: this.newTodo.trim(), completed: false }
      })

      this.newTodo = ''
    },

    async updateTodo(todoItem) {
      await this.$db.updateItem({
        databaseName: 'todos',
        ...todoItem
      })
    },

    async deleteTodo(id) {
      await this.$db.deleteItem({ databaseName: 'todos', itemId: id })
    }
  }
}
</script>

<style>
.completed .title {
  text-decoration: line-through;
  opacity: 0.5;
}

.todo-checkbox input,
.todo-checkbox .title {
  cursor: pointer;
}
</style>
