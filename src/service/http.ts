import Axios, { Method, AxiosResponse } from 'axios'
import vue from '../main'

const TOKEN_NAME = 'esi-token'
export {
  TOKEN_NAME
}

const axios = Axios.create()
let token = localStorage.getItem(TOKEN_NAME) || ''

export default class Http {
  private static async request (method: Method, url: string, data: any): Promise<any> {
    if (vue) {
      vue.$store.commit('setLoading', true)
    }
    const params: any = { method, url, data: {} }

    if (method === 'GET') {
      params.url += this.formatQuery(data)
    } else {
      params.data = data
    }
    params.data.token = token

    return axios.request(params).then((response) => {
      if (response.data.status && response.data.status >= 400) {
        response.status = 401
        this.errorHandler(response)
        return undefined
      }
      if (response.data.message) {
        vue.$message({
          message: response.data.message
        })
      }

      if (vue) {
        vue.$store.commit('setLoading', false)
      }
      return response.data
    }, (err) => {
      this.errorHandler(err.response)
    })
  }

  private static errorHandler (response: AxiosResponse) {
    if (response.status === 401) {
      vue.$message({
        message: response.data.message,
        type: 'warning'
      })
      vue.$router.push({ name: 'login', query: { to: vue.$route.name } })
    } else {
      vue.$message({
        message: response.data.message,
        type: 'error'
      })
    }

    if (vue) {
      vue.$store.commit('setLoading', false)
    }
    return undefined
  }

  static setToken (t : string) {
    token = t
  }

  static get (url: string, data: any): Promise<any> {
    return this.request('GET', url, data)
  }

  static post (url: string, data: any): Promise<any> {
    return this.request('POST', url, data)
  }

  static put (url: string, data: any): Promise<any> {
    return this.request('PUT', url, data)
  }

  static patch (url: string, data: any): Promise<any> {
    return this.request('PATCH', url, data)
  }

  static delete (url: string, data: any): Promise<any> {
    return this.request('DELETE', url, data)
  }

  static formatQuery (query: any) {
    var params = []

    if (query) {
      for (var item in query) {
        let vals = query[item]
        if (vals !== undefined) {
          params.push(item + '=' + query[item])
        }
      }
    }
    return params.length ? '?' + params.join('&') : ''
  }
}
