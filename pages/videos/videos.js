// pages/videos/videos.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chapter:{},
    chapters:[],
    course:{},
    isShow:true,
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log(options)
wx.request({
  url: `https://itfun.tv/api/v1/chapters/${options.id}.json`,
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  },
  success:res=>{
    console.log(res)
    let data = app.towxml.toJson(
      res.data.chapter.body,               // `markdown`或`html`文本内容
      'markdown'              // `markdown`或`html`
    );
    this.setData({
      "chapter": res.data.chapter,
      "chapters": res.data.chapters,
      "course": res.data.course,
      "article":data
    })

  }
})
  },
  go:function(){
     this.setData({
       isShow:!this.data.isShow
     })
  },
  goes:function(e){
 console.log(e)
    let id = e.currentTarget.dataset.id
 wx.navigateTo({
   url: `/pages/videos/videos?id=${id}`,
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
  // transition:all 1s ease 0.5s;
  //0.5s开始动，1s的时候结束
})