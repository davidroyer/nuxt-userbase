/* eslint-disable no-console */
export default ({ store, redirect }) => {
  console.log('🚀 Middleware - auth.js -> Check if user is logged in')

  const isAuthenticated = !!store.state.user
  console.log('🚀 ~ file: auth.js ~ line 6 ~ isAuthenticated', isAuthenticated)
  if (!isAuthenticated) redirect('/login')
}

// const isAuthenticated = !!store.state.auth.user
// if (!isAuthenticated) {
//   redirect({ name: 'auth' })
// }
