import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = ({ store }) => {
  if (!store.state.auth.user) {
    // redirect('/login')
  }
}

export default myMiddleware
