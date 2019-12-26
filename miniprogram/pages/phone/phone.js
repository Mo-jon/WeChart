// miniprogram/pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: ''
  },

  // 获取电话
  getPhoneNumber(e) {
    console.log('电话', e)
    this.setData({
      phone: JSON.stringify(e)
    })
  }
})