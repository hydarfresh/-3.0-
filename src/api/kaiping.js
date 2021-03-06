import request from '@/utils/request'

export function getkaipingList(page) {
  return request({
    url: 'api/adscontent/getAdsList',
    method: 'post',
    data: {
      page
    }
  })
}
export function editkaiping(adsname, adurl, id) {
  return request({
    url: 'api/adscontent/editAds',
    method: 'post',
    data: {
      adsname,
      adurl,
      id
    }
  })
}
export function delkaiping(id) {
  return request({
    url: 'api/adscontent/delAds',
    method: 'post',
    data: {
      id
    }
  })
}
/** 搜索接口 */

export function doSerach(key) {
  return request({
    url: 'api/adscontent/serach',
    method: 'post',
    data: {
      key
    }
  })
}
