export default ({ store, redirect, route }) => {
  const isAuthenticated = !!store.state.user
  if (!isAuthenticated) redirect('/login')
}
