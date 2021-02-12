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
  async initializeDB({ commit, dispatch }) {
    const session = await this.$db.init({
      appId: 'ceb14891-f2ad-453d-9ec1-b0919bdfceab',
      setUserHandler({ user }) {
        commit('setUser', user)
      }
    })

    if (session.user) {
      commit('setUser', session.user)
      await dispatch('getTodos')
    }
  },

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
