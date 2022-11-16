import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/axios'

const accessor: Plugin = ({ $axios, $cookies }) => {
  $axios.onRequest((config) => {
    const accessToken = $cookies.get('access_token')

    if (accessToken) {
      config.headers['x-access-token'] = accessToken
    }
  })
  $axios.interceptors.response.use(function (response) {
    return response.data
  })
  initializeAxios($axios)
}

export default accessor
