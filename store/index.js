import { dataTransformer } from '@/utils'

export const state = () => ({
  user: null,
  todos: []
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },

  updateTodos(state, todos) {
    state.todos = todos
  }
}

export const actions = {
  async getTodos({ commit }) {
    await this.$userbase.openDatabase({
      databaseName: 'todos',
      changeHandler(items) {
        const todos = dataTransformer(items)
        commit('updateTodos', todos)
      }
    })
  },

  async signIn({ commit, dispatch }, payload) {
    const user = await this.$userbase.signIn(payload)
    commit('setUser', user)
    await dispatch('getTodos')
  },

  async signUp({ commit, dispatch }, payload) {
    const user = await this.$userbase.signUp(payload)
    commit('setUser', user)
    await dispatch('getTodos')
  },

  async signOut({ commit }) {
    await this.$userbase.signOut()
    commit('setUser', null)
    this.$router.push('/login')
  }
}
