import userbase from 'userbase-js'
// eslint-disable-next-line no-console
// console.log('🚀 ~ file: db.client.js ~ line 2 ~ userbase', userbase)

export default (ctx, inject) => {
  inject('db', userbase)
}
