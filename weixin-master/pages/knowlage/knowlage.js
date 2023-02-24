


// 获取全局应用程序实例对象
var app = getApp();

// 创建页面实例对象
Page({
  /**
   * 页面名称
   */
  name: "index",
  /**
   * 页面的初始数据
   */

  data: {
  knowLargeList: [{
    bg: 'http://minio.bjwcxf.com/cultural-image/2022-10-17/1666005922584.png',
    title: '股权融资...',
    time: '2016.11'
  },
  {
    bg: 'http://minio.bjwcxf.com/cultural-image/2022-10-17/1666005478585.png',
    title: '“数字藏品下...',
    time: '2019.09'
  },
  {
    bg: 'http://minio.bjwcxf.com/cultural-image/2022-10-17/1666006456171.png',
    title: '领航中国·新..',
    time: '2021.10'
  },
  {
    bg: 'http://minio.bjwcxf.com/cultural-image/2022-10-17/1666007068954.png',
    title: '2022城市更新...',
    time: '2020.11'
  }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 注册coolsite360交互模块
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // 执行coolsite360交互组件展示
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    
  },
  toProductionDetail() {
    wx.navigateTo({
      url: '../../detail/knowlageDetail/knowlageDetail',
      fail:function(e) {
        console.log('eee', e);
      }
    })
  }


  //以下为自定义点击事件
  
})

