/* eslint-disable no-console */
export default ({ store, redirect, route }) => {
  console.log('route-controller -> route:', route)

  if (route.name !== 'todos' && store.state.user) redirect('/todos')
}
