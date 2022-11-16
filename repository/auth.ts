import { IReqLogin } from '~/request/auth'
import { IResLogin } from '~/response/auth'
import { $axios } from '~/utils/axios'

export const login = (data: IReqLogin): Promise<IResLogin> => {
  return $axios.post('/login', data)
}

const repository = {
  login,
}

export default repository
