class Tips {
  constructor() {

  }

  // 显示Toast
  toast(msg) {
    wx.showToast({
      title: msg.toString(),
      icon: 'none',
      duration: 1500
    })
  }
}

export default new Tips();