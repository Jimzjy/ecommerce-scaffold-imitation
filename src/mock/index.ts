import Mock from 'mockjs'
import { URL_LOGIN, TOKEN_NAME, URL_LOGOUT, URL_DASHBOARD } from '@/service'
import { realtime, notifications, functions, saleData } from './data'

Mock.setup({
  timeout: '200-600'
})

interface Response {
  status: number,
  message?: string,
  extra?: any
}

interface Options {
  url: string,
  type: string,
  body: any
}

// interface HandleFunction {
//   (options: Options): Response
// }
const AUTH_ERROR = '验证失败'

Mock.mock(URL_LOGIN, 'post', (options: Options): Response => {
  const body = JSON.parse(options.body || '')

  if (body.username === 'admin' && body.password === 'passwd') {
    const date = new Date()
    date.setDate(date.getDate() + 3)

    return {
      status: 200,
      message: '登录成功',
      extra: date.toString()
    }
  }
  return {
    status: 400,
    message: '账号或密码错误'
  }
})

function authToken (body: any): boolean {
  const token = body.token
  if (token == null || token === '') {
    return false
  }

  const tokenDate = new Date(token)
  return new Date() <= tokenDate
}

Mock.mock(URL_LOGOUT, 'post', (options: Options): Response => {
  const body = JSON.parse(options.body || '')
  const err = authToken(body)
  if (!err) {
    return {
      status: 401,
      message: AUTH_ERROR
    }
  }

  localStorage.removeItem(TOKEN_NAME)

  return {
    status: 200,
    message: '退出成功'
  }
})

Mock.mock(URL_DASHBOARD, 'get', (options: Options): Response => {
  const body = JSON.parse(options.body || '')
  const err = authToken(body)
  if (!err) {
    return {
      status: 401,
      message: AUTH_ERROR
    }
  }

  return {
    status: 200,
    extra: {
      realtime,
      notifications,
      functions,
      saleData
    }
  }
})
