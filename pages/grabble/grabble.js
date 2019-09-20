// pages/grabble/grabble.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  keyword:'',
  lists:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //一进来就接收，options 是onload自带的。打印options看接收到没有。然后把发过来的关键词取出来，再存。
  onLoad: function (options) {
console.log(options)
this.setData({
"keyword":options.keyword
})
//然后再请求接口，并把拿到的东西，id或者关键词发到后端，然后然后再把取到的东西存起来。
wx.request({
  method:"get",
  url: 'https://itfun.tv/api/v1/search.json?q=' + this.data.keyword,
  success:res=>{
    console.log(res)
    this.setData({
      "lists": res.data.courses
    })
 
  }
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
})