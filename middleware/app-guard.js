export default ({ store, redirect, route }) => {
  if (!store.state.user) redirect('/login')
}
