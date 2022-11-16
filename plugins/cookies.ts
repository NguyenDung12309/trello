import { NuxtCookies } from 'cookie-universal-nuxt'

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $cookies: NuxtCookies
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $cookies: NuxtCookies
  }
}

declare module '@nuxt/types' {
  interface Context {
    $cookies: NuxtCookies
  }
}
