// miniprogram/pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo()
        }
      }
    })
  },

  bindGetUserInfo(e) {
    this.data.userInfo = JSON.stringify(e.detail.userInfo)
    this.setData({
      userInfo: this.data.userInfo
    })
    console.log('获取用户信息', this.data.userInfo)
  }
})