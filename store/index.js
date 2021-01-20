/* eslint-disable no-console */
import userbase from 'userbase-js'

export const state = () => ({
  signedIn: false,
  user: null
})

export const actions = {
  async nuxtServerInit({ commit }, ctx) {
    const session = await userbase.init({
      appId: 'ceb14891-f2ad-453d-9ec1-b0919bdfceab',
      updateUserHandler({ user }) {
        console.log(
          '🚀 ~ file: index.js ~ line 13 ~ updateUserHandler ~ user',
          user
        )
      }
    })
    console.log(
      '🚀 ~ file: index.js ~ line 20 ~ nuxtServerInit ~ session',
      session
    )
  },

  async signUpUser({ commit }, payload) {
    const user = await userbase.signUp(payload)
    commit('setUser', user)
  }
}

export const mutations = {
  setUser(state, payload) {
    state.user = { ...payload }
  }
}
// console.log('🚀 ~ file: index.js ~ line 8 ~ nuxtServerInit ~ ctx', ctx)
