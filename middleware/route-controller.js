/* eslint-disable no-console */
export default ({ store, redirect, route }) => {
  if (route.name !== 'todos' && store.state.user) redirect('/todos')
}
