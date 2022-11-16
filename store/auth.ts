import { ActionTree, MutationTree } from 'vuex'
import { IResUser } from '~/response/users'

interface StateProps {
  user: IResUser | null
}
export const state = (): StateProps => ({
  user: null,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_USER(_state, value: IResUser) {
    _state.user = value
  },
}

export const actions: ActionTree<RootState, RootState> = {
  getUser({ commit }, payload) {
    commit('SET_USER', payload)
  },
}
