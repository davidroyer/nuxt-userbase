/* eslint-disable no-console */
export default ({ store, redirect }) => {
  const isAuthenticated = !!store.state.user
  console.log('🚀 ~ file: auth.js ~ line 6 ~ isAuthenticated', isAuthenticated)
  if (!isAuthenticated) redirect('/login')
}
