// 工具函数库
import config from './config'
function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      url: config.host + url,
      method,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          showModal('失败', res.data.data.msg)
          reject(res.data)
        }
      }
    })
  })
}
export function get (url, data) {
  return request(url, 'GET', data)
}
export function post (url, data) {
  return request(url, 'POST', data)
}
export function showModal (text, content, showCancel = false) {
  wx.showModal({
    title: text,
    content,
    showCancel
  })
}
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
