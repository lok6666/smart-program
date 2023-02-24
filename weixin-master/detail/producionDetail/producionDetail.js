// detail/producionDetail/producionDetail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
    htmlSnip: `<p style="text-indent: 2em; text-align: start;"><span style="font-size: 29px; font-family: 微软雅黑;"><strong>服务详情</strong></span></p><p style="text-indent: 2em; text-align: start;"><span style="color: rgb(217, 217, 217); font-size: 16px; font-family: 微软雅黑;"><strong>————————————————————————————————————————————————————</strong></span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 19px; font-family: 微软雅黑;"><strong>服务商</strong></span></p><p style="text-indent: 2em;"><span style="font-size: 16px; font-family: 微软雅黑;">北京快又好信息技术有限责任公司</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 19px; font-family: 微软雅黑;"><strong>服务价格</strong></span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">780元</span><span style="color: rgb(225, 60, 57); font-size: 16px; font-family: 微软雅黑;"><strong>（单次下单可立享8折新品优惠和律师咨询服务一次）</strong></span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 19px; font-family: 微软雅黑;"><strong>服务流程</strong></span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">1、商标的前期检索以及材料制作；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">2、材料递交商标局，次工作日下发申请号；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">3、形式审查，一般1个月左右下发电子版受理通知书；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">4、 实质审查 ，目前大概4-5个月，无驳回即可进入初审公告；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">5、 初审公告，向社会公告3个月，如无人提出异议，即可下发注册证书；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">6、 制作证书及快递( ®标志 )。</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 19px; font-family: 微软雅黑;"><strong>产品优势</strong></span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">1、如专家顾问认为您的第一选择有问题，可免费检索第二个商标；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">2、专家顾问会研究你的商标，为您规避申请风险；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">3、专家顾问会帮助您分析商标经营场景，并出具品牌保护方案；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">4、专家快速商标注册：专家顾问将在</span><span style="font-size: 19px; font-family: 微软雅黑;"><strong>一个工作小时之内</strong></span><span style="font-size: 16px; font-family: 微软雅黑;">为您提交申请。</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 19px; font-family: 微软雅黑;"><strong>服务优势</strong></span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">1、价格透明 各项业务经由平台明码标价，相比传统公司，价低质优，没有隐形收费 ；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">2、品质保障 甄选经验丰富的优秀专利代理人，平均行业服务经验达5年以上，辅以内部多级严 格审核机制，保障高品质服务 ；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">3、高效处理 借助平台和后台的自动化系统，实现专利局---平台---客户之间高效的信息流转， 流程快速简便 ；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">4、产品丰富 提供多类多级标准化产品满足不同的客户需求，并且在标准化产品的基础上提供如 加急产品、担保产品等可选产品 ；</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 16px; font-family: 微软雅黑;">5、贴心服务 资深顾问1对1全程管家式服务，避免多人重复对接，体验省心的升级服务。</span></p><p style="text-indent: 2em; text-align: start;"><span style="font-size: 19px; font-family: 微软雅黑;"><strong>产品详情</strong></span></p><p style="text-align: center;"><img src="http://minio.bjwcxf.com/cultural-image/2022-10-16/WechatIMG323.png" alt="使用说明" data-href="http://minio.bjwcxf.com/cultural-image/2022-10-16/WechatIMG323.png" style="width: 100%;"></p><p style="text-align: center;"><br></p>`
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      code: app.globalData.code
    });
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
  setClipboard() {
    wx.setClipboardData({
      data: 'http://enterprise.bjwcxf.com/#/archives',
      success (res) {
        wx.showToast({
          title: '已复制到剪贴板',
        })
      }
    })
  },
  getPhoneNumber (e) {
    app.globalData.code = e.detail.code
    this.setData({
      code: e.detail.code
    });
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '17732236736' //仅为示例，并非真实的电话号码
    })
  }

})