// components/goods/goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: {},
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goDetail: function() {
      this.triggerEvent('goDetail', {
        id: this.properties.goods.id
      })
    }
  }
})