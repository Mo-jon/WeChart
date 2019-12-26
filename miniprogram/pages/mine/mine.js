//mine.js
import LocalStorage from "../../services/localStorage";

Page({
  data: {
    photo: "/images/user.png",
    user: {}
  },

  // 首次加载
  onLoad: function() {},

  // 每次都加载
  onShow: function() {
    // 获取登录信息
    this.data.user = LocalStorage.user
    this.setData({
      user: this.data.user
    })
    console.log('获取登录信息', this.data.user)
  },

  login: async function() {
    if (this.data.user) {
      await LocalStorage.logout();
    }
    console.log('登录/退出', this.data.user)
    wx.navigateTo({
      url: '/pages/login/login',
    })
  }
})