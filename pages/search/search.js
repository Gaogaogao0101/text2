
Page({
  data: {
   lists:[
        "Laravel","WorkerMan","HTML","CSS","JavaScript","ECMAScript6","Web","MySQL","React Native","vue","React",
   ],
   keyword:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  go:function(e){
    console.log(e)
    let keyword_a = e.currentTarget.dataset.value;
    this.setData({
      keyword: keyword_a
    })
    wx.navigateTo({
      url: '../grabble/grabble?keyword='+this.data.keyword,
    })
  },
   book:function(e){
    console.log(e)
    let keyword_b = e.detail.value
    this.setData({
    keyword:keyword_b
    })
     wx.navigateTo({
       url: '../grabble/grabble?keyword=' + this.data.keyword,
     })
   },
//把关键词或者id发送到另外一个页面，然后在另外一个页面进行数据请求。搜索。
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})