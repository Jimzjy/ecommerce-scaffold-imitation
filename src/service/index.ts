import Http from './http'
export default Http

const TOKEN_NAME = 'esi-token'
const API = '/api'
const URL_LOGIN = API + '/user/login'
const URL_LOGOUT = API + '/user/logout'
export {
  API,
  TOKEN_NAME,
  URL_LOGIN,
  URL_LOGOUT
}
