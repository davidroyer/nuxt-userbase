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
    return await this.$db.openDatabase({
      databaseName: 'todos',
      changeHandler(items) {
        const todos = dataTransformer(items)
        commit('updateTodos', todos)
      }
    })
  },

  async signIn({ commit, dispatch }, payload) {
    const user = await this.$db.signIn(payload)
    commit('setUser', user)
    await dispatch('getTodos')
  },

  async signUp({ commit, dispatch }, payload) {
    const user = await this.$db.signUp(payload)
    commit('setUser', user)
    await dispatch('getTodos')
  },

  async signOut({ commit }) {
    await this.$db.signOut()
    commit('setUser', null)
    this.$router.push('/login')
  }
}
