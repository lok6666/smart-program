// pages/production/production.js
const {financialServicesAll} = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnList: [
      {
        message: "全部",
        value: '',
        isSelect: true,
      },
      {
        message: "建设银行",
        value: '建设银行',
        isSelect: false,
      },
      {
        message: "北京银行",
        value: '北京银行',
        isSelect: false,
      }
    ],
    financeList: [{
      serviceBank: '建设银行',
      serviceQuota: '最高500万元',
      serviceName: '抵押快贷',
      serviceTerm: '最长3年',
      serviceRange: '3.5%'
    },
    {
      serviceBank: '建设银行',
      serviceQuota: '300万元',
      serviceName: '信用快贷',
      serviceTerm: '最长1年',
      serviceRange: '3.95%'
    }],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    wx.request({
      url: financialServicesAll, //仅为示例，并非真实的接口地址
      data: {
        serviceTypes: this.data.active
      },
      method: 'POST',
      success (res) {
        that.setData({
          financeList: res.data.data.list
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
  onChange: function (event) {
    console.log('this.data.active---', event);
    let that = this;
    wx.request({
      url: financialServicesAll, //仅为示例，并非真实的接口地址
      data: {
        serviceTypes: event.detail.title
      },
      method: 'POST',
      success (res) {
        that.setData({
          financeList: res.data.data.list
        })
      }
    })
  },
  toFinaceDetail: function (event) {
    wx.navigateTo({
      url: '../../detail/financeDetail/financeDetail',
      fail:function(e) {
        console.log('eee', e);
      }
    })
  }
})