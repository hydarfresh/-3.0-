import request from '@/utils/request'

export function getAdminList(page) {
  return request({
    url: 'api/admin/getAdminList',
    method: 'post',
    data: {
      page
    }
  })
}
export function delAdmin(id) {
  return request({
    url: 'api/admin/deluser',
    method: 'post',
    data: {
      id
    }
  })
}

export function addAdmin(username, password, nickname) {
  return request({
    url: 'api/admin/adduser',
    method: 'post',
    data: {
      username,
      password,
      nickname
    }
  })
}

export function oppenAdmin(type, id) {
  return request({
    url: 'api/admin/forbiddenuser',
    method: 'post',
    data: {
      type,
      id
    }
  })
}
export function updatePwd(id, password) {
  return request({
    url: 'api/admin/updatepassword',
    method: 'post',
    data: {
      id,
      password
    }
  })
}

/** 查询接口 */
export function doSerach(key) {
  return request({
    url: 'api/admin/serach',
    method: 'post',
    data: {
      key
    }
  })
}
// export function updatePwd(key) {
//   return request({
//     url: 'api/admin/updatepassword',
//     method: 'post',
//     data: {
//       key
//     }
//   })
// }
