/**
 * Trigger code to run on app initialization like `nuxtServerInit`
 */

export default async ({ $db, store }) => {
  const session = await $db.init({
    appId: 'ceb14891-f2ad-453d-9ec1-b0919bdfceab',
    setUserHandler({ user }) {
      store.commit('setUser', user)
    }
  })

  if (session.user) {
    store.commit('setUser', session.user)
    await store.dispatch('getTodos')
  }
}
