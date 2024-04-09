import request from '@/utils/request'

// 查询预约记录（接单）列表
function openChat(data) {
  return request({
    url: '/utils/openChat',
    method: 'post',
    data: data
  })
}

export {openChat}
