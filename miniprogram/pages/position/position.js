// miniprogram/pages/position/position.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    positionInfo: ''
  },

   // 获取位置
   position() {
    const self = this;
    wx.getLocation({
      success(e) {
        console.log('定位', e)
        self.setData({
          positionInfo: JSON.stringify(e)
        })
      }
    })
  }
})