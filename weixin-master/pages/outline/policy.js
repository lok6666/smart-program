// pages/outline/policy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    htmlSnip: '111'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('res----', this);
    let that = this;
    wx.request({
      url: 'http://192.168.10.17:28182/article/get/1672',
      method: 'GET',
      success(res) {
        console.log('res----', res, that.setData);
        that.setData({
          htmlSnip: res.data.data.content
        });
      },
      fail(res) {
        console.log('err----', res);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})