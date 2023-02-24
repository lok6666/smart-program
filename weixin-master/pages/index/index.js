// pages/news/news.js
var app = getApp()
Page({
  data: {
    isChannelFolded: false,
    imageWidth: 100,

    channelButtons: [
      {
        "id": '0',
        "title": "产业政策",
        "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/nav/产业政策1.png',
        "url": "../cul/cul"
      },
      {
        "id": '1',
        "title": "灵活用工",
        "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/nav/灵活用工1.png',
        "url": "../../detail/flexibleDetail/flexibleDetail"
      },
      {
        "id": '2',
        "title": "金融服务",
        "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/nav/金融服务1.png',
        "url": "../finance/finance"
      },
      {
        "id": '3',
        "title": "知识产权",
        "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/nav/知识产权1.png',
        "url": "../production/production"
      },
      {
        "id": '4',
        "title": "知识课堂",
        "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/nav/知识课堂1.png',
        "url": "../knowlage/knowlage"
      },
      {
        "id": '5',
        "title": "楼宇信息",
        "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/nav/楼宇信息1.png',
        "url": "../apartment/apartment"
      },
      // {
      //   "id": '6',
      //   "title": "企业助手",
      //   "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/icon_small_assistant.png'
      // },
      // {
      //   "id": '7',
      //   "title": "趣说财经",
      //   "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/icon_small_finance.png'
      // },
      // {
      //   "id": '8',
      //   "title": "历史文化",
      //   "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/icon_small_history.png'
      // },
      // {
      //   "id": '9',
      //   "title": "校园味道",
      //   "image": 'http://minio.bjwcxf.com/cultural-image/smartprogram/icon_small_campus.png'
      // }
    ],
    slideData: [
      {
        "id": '0',
        "title": "石景山好风景石景山好风景石景山好风景石景山好风景石景山好风景",
        "image": 'http://minio.bjwcxf.com/cultural-image/1668072477851/1.png', 
        "url": '../article/article_01'
      },
      {
        "id": '1',
        "title": "石景山好风景石景山好风景石景山好风景",
        "image": 'http://minio.bjwcxf.com/cultural-image/1668072485482/2.png',
        "url": '../article/article_02' 
      },
      {
        "id": '2',
        "title": "341石景山好风景石景山好风景石景山好风景石景山好风景石景山好风景",
        "image": 'http://minio.bjwcxf.com/cultural-image/1668072492023/3.png',
        "url": '../article/article_01' 
      },
      {
        "id": '3',
        "title": "石景山342山好风景石景山好风景石景山好风景石景山好风景",
        "image": 'http://minio.bjwcxf.com/cultural-image/1668072492023/3.png',
        "url": '../article/article_02' 
      }
    ],
    articleData: [
      {
        "id": '1',
        "title": "最新政策",
        "image": [
          {
            img: 'http://minio.bjwcxf.com/cultural-image/smartprogram/policy/1.png',
            url: '../../detail/newDetail/newDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/smartprogram/policy/2.jpg',
            url: '../../detail/newDetail/newDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/smartprogram/policy/3.png',
            url: '../../detail/newDetail/newDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/smartprogram/policy/1.png',
            url: '../../detail/newDetail/newDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/smartprogram/policy/2.jpg',
            url: '../../detail/newDetail/newDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/smartprogram/policy/3.png',
            url: '../../detail/newDetail/newDetail',
          }   
        ],
        "bgColor": "linear-gradient(to top, rgba(255,0,0,0), rgba(162,204,246,0.3)",
        "url": '../newList/newList',
        "numImage": 3
      },
      {
        "id": '0',
        "title": "最新新闻",
        "image": [
          'http://minio.bjwcxf.com/cultural-image/smartprogram/logo.jpg',
          'http://minio.bjwcxf.com/cultural-image/smartprogram/banner_guide.png',
        ],
        "newList": [
          '让传统文化资源焕发生命力、发挥新作',
          '关于2022年“投贷奖”拟支持企业名单公示',
          '关于举办文化企业融资与上市主题沙龙的通'
        ],
        "bgColor": "linear-gradient(to top, rgba(255,0,0,0), rgba(162,204,246,0.3)",
        "url": '../policy/policy',
        "numImage": 0 
      },
      // {
      //   "id": '1',
      //   "title": "最新政策",
      //   "bgColor": "linear-gradient(to top, rgba(255,0,0,0), rgba(97,148,250,0.3)",
      //   "image": [
      //     'http://minio.bjwcxf.com/cultural-image/smartprogram/logo.jpg',
      //     'http://minio.bjwcxf.com/cultural-image/smartprogram/banner_guide.png'
      //   ],
      //   "newList": [
      //     '关于举办文化企业融资与上市主题沙龙的通',
      //     '大道之行 和谐劳资——现阶段劳动争议热点问题”主..',
      //     '关于举办“数字藏品下半场：如何赋能实体、联...'
      //   ],
      //   "url": '../policy/policy',
      //   "numImage": 0 
      // },
      {
        "id": '0',
        "title": "石景山风貌",
        bgColor: "#f5f5f5",
        "image": [
          'http://enterprise.bjwcxf.com/static/img/%E9%A6%96%E9%92%A2%E5%9B%AD.264fccce.png',
          'http://enterprise.bjwcxf.com/static/img/%E6%9C%97%E5%9B%AD.3a6db2f6.png'
        ],
        "numImage": 2  
      },
      {
        "id": '1',
        "title": "企业风采",
        bgColor: "#f5f5f5",
        "image": [
          {
            img: 'http://minio.bjwcxf.com/cultural-image/2022-10-17/about-busneiss2.png',
            url: '../../detail/busneiDetail/busneiDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/2022-10-21/1666343984476.png',
            url: '../../detail/busneiDetail/busneiDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/2022-10-18/1666074945287.jpeg',
            url: '../../detail/busneiDetail/busneiDetail',
          },
          {
            img: 'http://minio.bjwcxf.com/cultural-image/2022-10-18/1666078472598.jpeg',
            url: '../../detail/busneiDetail/busneiDetail',
          }
        ],
        "numImage": 4
      }
    ]
  },

  adjustImage: function (e) {
    var id = e.currentTarget.dataset.id;
    var image_ = this.data.articleData;
    // this.setData({
    //   imageWidth: 700 / image_.length
    // })
    console.log(id)
  },

  // 跳转幻灯轮播文章页面
  toSlidePageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.slideData[id].url
    })
  },
  //轮播底导航跳转
  toChannel: function (event) {
    var id = event.currentTarget.dataset.id;
    let that = this;
    wx.navigateTo({
      url: that.data.channelButtons[id].url,
      fail: function(e) {
        wx.switchTab({
          url: that.data.channelButtons[id].url,
        });
      }
    })
  },
  // 跳转新闻消息文章页面
  toArticlePageDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: this.data.articleData[id].url
    })
  },        
  toFmDetail:function() {
    wx.navigateTo({
      url: '../../detail/fmDetail/fmDetail'
    })
  },
  busneiDetail:function(options) {
    wx.navigateTo({
      "url": options.currentTarget.dataset.url
    })
  },
  toConsultPageDetail:function() {
    wx.navigateTo({
      "url": '../../detail/newDetail/newDetail'
    })
  },
  onLoad: function () {
    wx.onAppEnterBackground(() => {
      console.log('小程序进入后台');
    });
  }
}) 