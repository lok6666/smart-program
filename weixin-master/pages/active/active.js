// pages/active/active.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeList: [{
      title: '会议',
    }, {
      title: '沙龙',
    }, {
      title: '培训班',
    }],
    activeMessageList: [{
      img: 'http://minio.bjwcxf.com/cultural-image/2022-10-17/1666005922584.png',
      title: '股权融资之北交所上市高端分享会',
      desc: '、西部证券董事深度解读北交所上市条件、价值和路径规划 2、财咖科技创始人分享：大量企业因财税问题导致融资、上市失败，该如何规避？ 3、资深CPA专家1对1进行“财税合规诊断'
    }, {
      img: 'http://minio.bjwcxf.com/cultural-image/2022-10-17/1666005478585.png',
      title: '数字藏品下半场：如何赋能实体、联动营销”主题沙龙',
      desc: '数藏营销具有哪兰优势？谁在玩数藏营销？ 企业在数藏营销落地化方面做了哪些实践，有什么可复制的经验分享吗？ 数藏赋能私域，怎么玩才能抓住用户的心？ 数宇藏品怎样激活线下？ 影视联合数藏有哪些新的可能性？数藏x元宇宙，新赛道谁能率先领跑？'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
  onClick: function() {
    wx.navigateTo({
      url: '../../detail/activeDetail/activeDetail',
      fail:function(e) {
        console.log('eee', e);
      }
    })
  }
})