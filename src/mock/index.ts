import Mock from 'mockjs'
import { URL_LOGIN, TOKEN_NAME, URL_LOGOUT } from '@/service'

Mock.setup({
  timeout: '200-600'
})

interface Response {
  status: number,
  message: string,
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

Mock.mock(URL_LOGIN, 'post', (options: Options): Response => {
  const body = JSON.parse(options.body || '')

  if (body.username === 'admin' && body.password === 'passwd') {
    const date = new Date()
    date.setDate(date.getDate() + 3)
    localStorage.setItem(TOKEN_NAME, date.toString())

    return {
      status: 200,
      message: '登录成功'
    }
  }
  return {
    status: 400,
    message: '账号或密码错误'
  }
})

function authToken (data: any): boolean {
  const token = data.token
  if (token == null || token === '') {
    return false
  }

  const tokenDate = new Date(token)
  return new Date() <= tokenDate
}

Mock.mock(URL_LOGOUT, 'post', (options: Options): Response => {
  const err = authToken(options.body)
  if (!err) {
    return {
      status: 401,
      message: '验证过期'
    }
  }

  localStorage.removeItem(TOKEN_NAME)

  return {
    status: 200,
    message: '退出成功'
  }
})
