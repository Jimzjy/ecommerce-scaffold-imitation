import Http, { TOKEN_NAME } from './http'
export default Http

const API = '/api'
const URL_LOGIN = API + '/user/login'
const URL_LOGOUT = API + '/user/logout'
const URL_DASHBOARD = API + '/dashboard'
const URL_STAT_CENTER = API + '/statcenter'
const URL_TRADE = API + '/trade'
const URL_GOODS = API + '/goods'
const URL_ORDER_LIST = API + '/orderlist'
const URL_CUSTOMER = API + '/customer'
const URL_SETTING = API + '/setting'
const URL_COMMON_DATA = API + '/commondata'

export {
  API,
  TOKEN_NAME,
  URL_LOGIN,
  URL_LOGOUT,
  URL_DASHBOARD,
  URL_STAT_CENTER,
  URL_TRADE,
  URL_GOODS,
  URL_ORDER_LIST,
  URL_CUSTOMER,
  URL_SETTING,
  URL_COMMON_DATA
}
