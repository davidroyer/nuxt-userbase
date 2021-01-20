export default async (ctx) => {
  // eslint-disable-next-line no-console
  console.log('🚀 Middleware - auth.js ~ line 2 ~ ctx', ctx)
  await ctx.store.dispatch('nuxtClientInit')
}

// export default function ({ store, route }) {
//   store.commit('class/SetClass', route.name)
// }
