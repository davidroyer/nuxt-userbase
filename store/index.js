/* eslint-disable no-console */
export const state = () => ({
  signedIn: false,
  user: null,
  todos: []
})

export const mutations = {
  updateUser(state, payload) {
    state.user = payload
  },

  updateTodos(state, payload) {
    state.todos = payload
  }
}

export const actions = {
  async nuxtClientInit({ commit }, ctx) {
    console.log('🚀 ~ file: index.js ~ line 11 ~ nuxtClientInit ~ ctx', ctx)
    console.log('nuxtClientInit ~ Running!')

    const session = await this.$db.init({
      appId: 'ceb14891-f2ad-453d-9ec1-b0919bdfceab',
      updateUserHandler({ user }) {
        console.log('updateUserHandler ~ user', user)
      }
    })
    if (session.user) {
      commit('updateUser', session.user)
      await this.$db.openDatabase({
        databaseName: 'todos',
        // eslint-disable-next-line object-shorthand
        changeHandler: function (items) {
          commit('updateTodos', items)
        }
      })
    }
  },

  async initDatabase({ commit }) {
    return await this.$db.openDatabase({
      databaseName: 'todos',
      // eslint-disable-next-line object-shorthand
      changeHandler: function (items) {
        commit('updateTodos', items)
      }
    })
  },

  async signUpUser({ commit }, payload) {
    const user = await this.$db.signUp(payload)
    commit('updateUser', user)
  },

  async signInUser({ commit }, payload) {
    const user = await this.$db.signIn(payload)
    commit('updateUser', user)
  },

  async logout({ commit }) {
    await this.$db.signOut()
    commit('updateUser', null)
    commit('updateTodos', [])
  }
}

// console.log('🚀 ~ file: index.js ~ line 8 ~ nuxtClientInit ~ ctx', ctx)
