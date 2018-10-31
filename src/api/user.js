import request from '@/utils/request'

export function getUser(page) {
  return request({
    url: 'api/user/getuserlist',
    method: 'post',
    data: {
      page
    }
  })
}
export function delUser(uid) {
  return request({
    url: 'api/user/deluser',
    method: 'post',
    data: {
      uid
    }
  })
}
/** 搜索接口 */
export function doSerach(key) {
  return request({
    url: 'api/user/serach',
    method: 'post',
    data: {
      key
    }
  })
}
