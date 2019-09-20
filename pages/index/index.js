Page({
  data: {
    lists:[],
    new_courses:[],
    likes_courses:[],
    recommended_courses:[],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    slide_index:0,
  },
  onLoad: function (options){
    wx.request({
      url:'https://itfun.tv/api/v1/home.json',
      success:(res)=>{
        console.log(res);
        this.setData({
           "lists": res.data.slide_courses,
          "new_courses": res.data.new_courses,
          "likes_courses": res.data.likes_courses,
          "recommended_courses": res.data.recommended_courses
           })
     }
    })
  },
  onChange:function(res){
    this.setData({
      slide_index:res.detail.current
    })
  },
  grabble:function(){
    wx.navigateTo({
      url:'../search/search'
    })
  },
  news:function(){
    wx.navigateTo({
      url: '../news/news'
    })
  },
  go:function(e){
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../particulars/particulars?id='+id,
    })
  }
})