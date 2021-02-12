# DevNotes

## Userbase.js

- Worked perfectly so far. Extremly easy to setup and use.
- It's REAL TIME 🔥!
  I updated on my phone and saw it update it live on desktop

## Nuxt

- It seems like the SPA loading indicator is now being included unless I set the
  name of which indicator to use.  
  A `string` or `object` can be used for the `loadingIndicator` option.  
  <https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading-indicator#built-in-indicators>

- To use SPA mode set `ssr` to `false`. Remove `target: 'static'`.

### eslint cache

Disable it in `nuxt.config.js` like so:

```js
export default {
  eslint: {
    cache: false
  }
}
```
