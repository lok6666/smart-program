// pages/apartment/apartment.js
const {buildings} = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    apartmentList: [{
      buildingImages: 'http://minio.bjwcxf.com/cultural-image/1669340430698/X[N9OS_O{F`SDCYOTSBIWTN.png',
      buildingName: '点石商务公园'
    },
    {
      buildingImages: 'http://minio.bjwcxf.com/cultural-image/1669341248359/中海大厦.jpg',
      buildingName: '中海大厦'
    },{
      buildingImages: 'http://minio.bjwcxf.com/cultural-image/1669342001297/瑞达大厦.png',
      buildingName: '瑞达大厦'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    wx.request({
      url: buildings, //仅为示例，并非真实的接口地址
      data: {
      },
      method: 'POST',
      success (res) {
        that.setData({
          apartmentList: res.data.data.list
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
  
  onClick: function(data) {
    wx.navigateTo({
      url: '../../detail/apartmentDetail/apartmentDetail?id=' + data.currentTarget.dataset.id
    })
  }
})