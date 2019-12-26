// miniprogram/pages/scan/scan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanInfo: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 扫码
  scan() {
    const self = this;
    wx.scanCode({
      success(e) {
        console.log('扫码', e)
        self.setData({
          scanInfo: JSON.stringify(e)
        })
      }
    })
  }
})