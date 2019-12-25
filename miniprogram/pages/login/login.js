// miniprogram/pages/login/login.js

import Api from '../../services/api.js';
import LocalStorage from "../../services/localStorage";

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  submit: function () {
    console.log('登录')
    Api.login('guiqiang', '123').then((result) => {
      if (result.error) {
        console.error(result.message);
        return;
      }
      LocalStorage.login({
        account: result.data.admin_name,
        nextTime: result.data.admin_next_time,
        token: result.data.admin_token
      }).then(() => {
        console.log("登录成功", result);
        wx.switchTab({
          url: `/pages/mine/mine`
        })
      });
    });
  }
})