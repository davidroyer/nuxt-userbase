/* eslint-disable no-console */
export const state = () => ({
  user: null,
  todos: []
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },

  updateTodos(state, payload) {
    state.todos = payload
  }
}

export const actions = {
  async nuxtClientInit({ commit, dispatch }, ctx) {
    const session = await this.$db.init({
      appId: 'ceb14891-f2ad-453d-9ec1-b0919bdfceab',
      setUserHandler({ user }) {
        commit('setUser', user)
      }
    })

    if (session.user) {
      commit('setUser', session.user)
      await dispatch('initDatabase')
    }
  },

  async initDatabase({ commit }) {
    console.log('🚀 ~ initDatabase')

    return await this.$db.openDatabase({
      databaseName: 'todos',
      changeHandler(items) {
        commit('updateTodos', items)
      }
    })
  },

  async signIn({ commit, dispatch }, payload) {
    const user = await this.$db.signIn(payload)
    commit('setUser', user)
    await dispatch('initDatabase')
  },

  async signUp({ commit, dispatch }, payload) {
    const user = await this.$db.signUp(payload)
    commit('setUser', user)
    await dispatch('initDatabase')
  },

  async signOut({ commit }) {
    await this.$db.signOut()
    commit('setUser', null)
    // commit('updateTodos', [])
    this.$router.push('/login')
  }
}
