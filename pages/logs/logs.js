Page({
  data: {
    categorie: [],
    slide_index:0,
    likes_courses:[]
  },
  onLoad: function () {
    wx.request({
      url: 'https://itfun.tv/api/v1/categories.json', 
      success:(res)=> {
        console.log(res)
        this.setData({
          "categorie": res.data.categories
        })
        wx.request({
          url: 'https://itfun.tv/api/v1/categories/front_end.json',
          success:(res)=>{
            console.log(res)
           this.setData({
             "likes_courses": res.data.courses
           })
          }
        })
      }
    })
  },
  changeColor: function (e) {
    console.log(e)
    this.setData({
      slide_index: e.currentTarget.dataset.index
    })
    let slug = e.currentTarget.dataset.slug                                                                                                                           
    wx.request({
      url: `https://itfun.tv/api/v1/categories/${slug}.json`,
      success: (res) => {
        console.log(res)
        this.setData({
          "likes_courses": res.data.courses
        })
      }
    })
}
})