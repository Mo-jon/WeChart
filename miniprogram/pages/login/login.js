// miniprogram/pages/login/login.js

import Api from '../../services/api.js';
import Storage from "../../services/storage";
import Tips from "../../services/tips";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    psw: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  // 输入事件监听,双向数据绑定实现
  bindKeyInput: function (e) {
    console.log(e)
    switch (e.target.id) {
      case 'name':
        this.setData({
          name: e.detail.value
        });
        break;

      case 'psw':
        this.setData({
          psw: e.detail.value
        });
        break;

      default:
        break;
    }
  },

  // 提交
  submit: function () {
    console.log('登录')
    Api.login(this.data.name, this.data.psw).then((result) => {
      if (result.error) {
        console.error(result.message);
        Tips.toast(result.message);
        return;
      }
      Storage.login({
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