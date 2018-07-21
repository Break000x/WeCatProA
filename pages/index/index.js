//index.js
//获取应用实例
const app = getApp()
var url = 'http://127.0.0.1:8080/';

Page({
  data: {
    // banner
    imgUrls: [],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    grids: [
      // { pro_name: '分类', img_url:"http://7xnmrr.com1.z0.glb.clouddn.com/red.png"},
      // { pro_name: '计划', img_url:"http://7xnmrr.com1.z0.glb.clouddn.com/yellow.png"},
      // { pro_name: '历史', img_url:"http://7xnmrr.com1.z0.glb.clouddn.com/green.png"}
      ],
      
    pages: [
      // { 
      //   page_name: '彗星撞地球啦', 
      //   img_url: 'http://7xnmrr.com1.z0.glb.clouddn.com/red.png',
      //   page_desc: '今天下午彗星开始撞击地球'
      // },
      // { 
      //   page_name: '地球撞彗星啦', 
      //   img_url: 'http://7xnmrr.com1.z0.glb.clouddn.com/yellow.png',
      //   page_desc: '今天上午地球开始撞击彗星'
      // },
      // { 
      //   page_name: '彗星与地球相撞啦', 
      //   img_url: 'http://7xnmrr.com1.z0.glb.clouddn.com/green.png', 
      //   page_desc: '现在回形和地球开始相撞啦'
      // }
    ]
  },
  getImgInfo:function(e){
    console.info('从轮播图进入')
    console.info(e.currentTarget.dataset.id)
  },
  getAllContextList:function(e){
    console.info('得到所有新闻列表')
    wx.navigateTo({
      url: '/pages/context_list/page_list?qry_type=all'
    })

  },

  onLoad: function (options) {
    console.info(this.data.imgUrls)
    var that=this;
    //加载首页轮播图
    wx.request({
      url: url + 'homeImage',
      data: {
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.info(res.data)
        that.setData({imgUrls:res.data})
      },
      fail: function (){
        wx.showToast({
          title: '数据加载中',
          icon: 'loading',
          duration: 9999999
        });
      }
    })
    getMenu(that);
  }

})


//加载分类
function getMenu(that){
  wx.request({
    url: url + 'homeClass',
    data: {

    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      console.info(res)
      that.setData({ grids: res.data})
    },
    fail: function () {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',
        duration: 9999999
      });
    }
  })
  getContext(that);
}

function getContext(that){
  wx.request({
    url: url + 'homeContext',
    data: {

    },
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      console.info(res)
      that.setData({ pages: res.data })
    },
    fail: function () {
      wx.showToast({
        title: '数据加载中',
        icon: 'loading',
        duration: 9999999
      });
    }
  })
}


