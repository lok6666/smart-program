// pages/production/production.js
const {entServiceDockingAll} = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    messageList: [{
      serviceImage: 'http://minio.bjwcxf.com/cultural-image/1666691532207/%E5%A4%96%E8%A7%82%E8%AE%BE%E8%AE%A1%E4%B8%93%E5%88%A9_%E5%8D%95%E4%B8%AA%E7%94%B3%E8%AF%B7%E5%87%8F%E7%BC%B4.jpg',
      serviceName: '外观设计专利',
      servicePrice: '875元',
      serviceHits: '7',
      supplierName: '快法务'
    },
    {
      serviceImage: 'http://minio.bjwcxf.com/cultural-image/1666691540863/%E5%8F%91%E6%98%8E%E4%B8%93%E5%88%A9%EF%BC%88%E5%B8%B8%E8%A7%84%E9%A2%86%E5%9F%9F%EF%BC%89%EF%BC%88%E6%9C%BA%E6%A2%B0_%E6%97%A5%E5%B8%B8%E7%94%9F%E6%B4%BB_%E7%AE%80%E5%8D%95%E7%BB%84%E5%90%88%E7%89%A9%EF%BC%89_%E5%8D%95%E4%B8%AA%E7%94%B3%E8%AF%B7%E5%87%8F%E7%BC%B4.jpg',
      serviceName: '发明专利',
      servicePrice: '6160元',
      serviceHits: '17',
      supplierName: '快法务'
    },{
      serviceImage: 'http://minio.bjwcxf.com/cultural-image/1666691578643/%E4%B8%93%E7%B2%BE%E7%89%B9%E6%96%B0%E4%B8%AD%E5%B0%8F%E4%BC%81%E4%B8%9A.jpg',
      serviceName: '专精特新中小企业认定',
      servicePrice: '6000元',
      serviceHits: '17',
      supplierName: '快法务'
    }],
    activeList: [
      {
        message: "全部",
        isSelect: true,
        value: ''
      },
      {
        message: "知识产权",
        isSelect: false,
        value: 0
      },
      {
        message: "资质认定",
        isSelect: false,
        value: 1
      },
      {
        message: "工商业务",
        isSelect: false,
        value: 2
      },
      {
        message: "财税服务",
        isSelect: false,
        value: 3
      },
      {
        message: "政府补贴",
        isSelect: false,
        value: 4
      },
      {
        message: "数字科技",
        isSelect: false,
        value: 6
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    wx.request({
      url: entServiceDockingAll, //仅为示例，并非真实的接口地址
      data: {
        serviceTypes: this.data.active
      },
      method: 'POST',
      success (res) {
        that.setData({
          messageList: res.data.data.list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 跳转重点项目文章页面
  toProductionDetail: function (event) {
    wx.navigateTo({
      url: '../../detail/producionDetail/producionDetail',
      fail:function(e) {
        console.log('eee', e);
      }
    })
  },
  onChange: function (event) {
    let that = this;
    wx.request({
      url: entServiceDockingAll, //仅为示例，并非真实的接口地址
      data: {
        serviceTypes: event.detail.index
      },
      method: 'POST',
      success (res) {
        that.setData({
          messageList: res.data.data.list
        })
      }
    })
  }
})