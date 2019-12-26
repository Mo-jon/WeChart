//mine.js
import Api from "../../services/api";

Page({
  data: {
    list: []
  },

  // 加载列表
  onLoad: function () {
    this.getData()
    this.getCrops()
  },

  // 获取数据
  getData: function () {
    let data = []
    for (let i = 0; i < 10; i++) {
      data.push({
        id: i,
        image: "/images/photo.png",
        title: "名称",
        type: "类型",
        detail: "描述: 的说法是否has都是繁华撒地方哈师大"
      })
    }
    this.data.list = data.concat(this.data.list);
    this.setData({
      'list': this.data.list
    });
  },

  // 获取分类
  getCrops() {
    Api.getCrops().then(result => {
      console.log('获取数据', result)
    })
  },

  // 加载下一页
  onReachBottom: function () {
    console.log('可以分页了')
    this.getData()
  },

  // 查看详情
  goDetail: function (event) {
    console.log('查看详情', event.detail)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${event.detail.id}`,
    })
  }
})