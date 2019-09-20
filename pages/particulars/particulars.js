// pages/particulars/particulars.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapters:[],
    course:{},
    relation_courses:[],
    teacher:{},
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options)
  
     
  
   wx.request({
     url: `https://itfun.tv/api/v1/courses/${options.id}.json`,
     success:res=>{
       console.log(res)
       this.setData({
         "chapters": res.data.chapters,
         "course": res.data.course,
         "relation_courses": res.data.relation_courses,
         "teacher": res.data.teacher,
       })
     }
   })
  },
  leave:function(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/particulars/particulars?id='+id,
    })
    // wx.request({
    //   url: `https://itfun.tv/api/v1/courses/${e.currentTarget.dataset.id}.json`,
    //   success: res => {
    //     console.log(res)
    //     this.setData({
    //       "chapters": res.data.chapters,
    //       "course": res.data.course,
    //       "relation_courses": res.data.relation_courses,
    //       "teacher": res.data.teacher,
    //     })
    //   }
    // })
  },
  skip:function(e){
     console.log(e)
    let id = e.currentTarget.dataset.id
     wx.navigateTo({
       url: '/pages/videos/videos?id='+id,
     })
  },
isShow:function(){
  this.setData({
    isShow:!this.data.isShow
  })
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
    // this.leave()
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