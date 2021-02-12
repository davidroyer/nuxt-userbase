/* eslint-disable no-console */
export default ({ store, redirect, route }) => {
  console.log('route', route)

  const isAuthenticated = !!store.state.user
  if (!isAuthenticated) redirect('/login')
}
