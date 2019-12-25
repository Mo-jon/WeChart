//mine.js
import LocalStorage from "../../services/localStorage";

Page({
  data: {
    photo: "/images/user.png",
    user: {}
  },

  onLoad: function () {
    // 获取登录信息
    this.setData({
      user: LocalStorage.user
    })
  },
})