/**
 * Make the userbase instance available everywhere as `$userbase`
 */

import userbase from 'userbase-js'

export default (ctx, inject) => {
  inject('userbase', userbase)
}
