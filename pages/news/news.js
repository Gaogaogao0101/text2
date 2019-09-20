
Page({

  data: {
   lists:[],
  },

  onLoad: function (options) {
    wx.request({
      url: `https://itfun.tv/api/v1/news.json`,
      //axios
      success:res=>{
        console.log(res)
        //存数据
        this.setData({
          "lists": res.data.notices
        })
      }
    })
  },
go:function(e){
  console.log(e)
  //带参数跳转有两种方法，这种是点击之后在事件里面写跳转带参。
  //还有一种方法是直接用标签跳转。
wx.navigateTo({
  url: `../details/details?url=https://itfun.tv/news/${e.currentTarget.dataset.id}`,
})
}

})