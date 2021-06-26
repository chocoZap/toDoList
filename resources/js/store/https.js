import axios from 'axios'

const actions = {
  async request({}, { method, url, data }) {
    // TODO: 認証情報を持たせる
    const options = {
      method,
      url,
      data
    }
    const res = await axios(options)

    return res
  },

  async post({dispatch}, request) {
    request.method = await 'post'
    return dispatch('request', request)
  },
  async get({dispatch}, request) {
    request.method = await 'get'
    return dispatch('request', request)
  },
  async put({dispatch}, request) {
    request.method = await 'put'
    return dispatch('request', request)
  },
  async delete({dispatch}, request) {
    request.method = await 'delete'
    return dispatch('request', request)
  }
}

export default {
  namespaced: true,
  actions
}
