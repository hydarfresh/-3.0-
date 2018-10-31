import request from '@/utils/request'

export function getlist(page) {
    return request({
        url: 'http://neimeng.qbitv.net/?m=Home&c=Ondemand&a=ondemand_list',
        method: 'post',
        data: {
          page
        }
    })
}