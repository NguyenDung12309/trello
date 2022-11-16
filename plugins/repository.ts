import { Plugin } from '@nuxt/types'
import repo from '~/repository'

declare module 'vue/types/vue' {
  interface Vue {
    $repo: typeof repo
  }
}

declare module '@nuxt/types' {
  interface Context {
    $repo: typeof repo
  }
}

declare module 'vuex/types/index' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $repo: typeof repo
  }
}

const repository: Plugin = (_context, inject) => {
  inject('repo', repo)
}

export default repository
