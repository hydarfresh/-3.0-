import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: 'api/admin/userlogin',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: 'api/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'api/admin/logout',
    method: 'post'
  })
}
