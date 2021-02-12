/* eslint-disable no-console */
export default ({ store, redirect }) => {
  const isAuthenticated = !!store.state.user
  if (!isAuthenticated) redirect('/login')
}
