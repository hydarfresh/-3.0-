import request from '@/utils/request'

export function getSugList(page) {
  return request({
    url: 'api/suggestion/getSuggestionList',
    method: 'post',
    data: {
      page
    }
  })
}
export function delSug(id) {
  return request({
    url: 'api/suggestion/delsuggestion',
    method: 'post',
    data: {
      id
    }
  })
}
/** 搜索接口 */
export function doSerach(key) {
  return request({
    url: 'api/suggestion/serach',
    method: 'post',
    data: {
      key
    }
  })
}
