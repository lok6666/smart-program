// pages/newList/newList.wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleData: [
      {
        "id": '0',
        "title": "最新新闻",
        "newList": [
          {'title': '让传统文化资源焕发生命力、发挥新作用',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '关于2022年“投贷奖”拟支持企业名单公示',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'

          },
          {'title': '关于2022年“房租通”拟支持企业名单公示',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '北京国际网络电影展光年创投大会项目征集剩余5天',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '关于举办文化企业融资与上市主题沙龙的通知',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '大道之行 和谐劳资——现阶段劳动争议热点问题”主题...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '关于举办2022年北京文化企业上市培训班的通知',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '关于举办股权融资之北交所上市高端分享会的通知',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '与百度、摩登天空、头号偶像、花生动画畅谈“数藏...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '关于举办“数字藏品下半场：如何赋能实体、联动营....',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '城市更新的文化价值表达与商业价值转...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '城市更新的文化价值表达与商业价值转化高...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '城市更新的文化价值表达与商业价值转...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '城市更新的文化价值表达与商业价值转化高...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '城市更新的文化价值表达与商业价值转...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '城市更新的文化价值表达与商业价值转化高...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '城市更新的文化价值表达与商业价值转...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '城市更新的文化价值表达与商业价值转化高...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '城市更新的文化价值表达与商业价值转...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '城市更新的文化价值表达与商业价值转化高...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '城市更新的文化价值表达与商业价值转...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '城市更新的文化价值表达与商业价值转化高...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
          {'title': '城市更新的文化价值表达与商业价值转...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
          },
          {'title': '城市更新的文化价值表达与商业价值转化高...',
            time: '2022-10-25',
            img: 'http://www.bciifa.org.cn/images/04a422c14d5c4741a6f8bc604c5d10bb.jpg'
            
          },
        ],
        "url": '../newList/newList',
        "numImage": 0 
      }
    ]
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
  toConsultPageDetail: function (event) {
    wx.navigateTo({
      url: '../../detail/newDetail/newDetail',
    })
  },
})