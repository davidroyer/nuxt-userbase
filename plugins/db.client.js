/**
 * Make the userbase instance available everywhere as `$db`
 */

import userbase from 'userbase-js'

export default (ctx, inject) => {
  inject('db', userbase)
}
