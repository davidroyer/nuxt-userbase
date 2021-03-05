/**
 * Trigger code to run on app initialization like `nuxtServerInit`
 */

export default async ({ $userbase, store }) => {
  /**
   * Initialize userbase app
   */
  const session = await $userbase.init({
    appId: 'ceb14891-f2ad-453d-9ec1-b0919bdfceab',
    sessionLength: 8760
  })

  /**
   * Check for active user. If active user, update state and get our data
   */
  if (session.user) {
    store.commit('setUser', session.user)
    await store.dispatch('getTodos')
  }
}
