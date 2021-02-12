/**
 * Trigger code to run on app initialization like `nuxtServerInit`
 */

export default async (ctx) => {
  await ctx.store.dispatch('initializeDB')
}
