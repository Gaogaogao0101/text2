Page({

  data: {
    access_token:'',
    lists:{},
  },


  onLoad: function () {
   this.getUser()
  },
  //页面一进来就开始监听
  onShow:function(){
    this.getUser()
  },
   //页面一进来就要把存的票取出来，因为只有取票才能进去。
  getUser(){
    //getStorageSync 是wx.getStorage的同步版本
    //从本地缓存中异步或者同步获取指定 key 的内容
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')
    this.setData({
      access_token: access_token
    })
    //如果拿到了票,则请求
    if(access_token){
      wx.request({
        url: `https://itfun.tv/api/v1/users/me.json`,
        header:{
          'Authorization':`${token_type} ${access_token}`
        },
        //拿到票之后则判断票是否正确， 报200则是正确 401则是有问题 有问题就清空再请求。
        success:res => {
          console.log(res)
          if(res.statusCode === 401){
            wx.removeStorageSync('token_type')
            wx.removeStorageSync('access_token')
            wx.navigateTo({
              url:'../enter/enter'
            })
          }
          this.setData({
            "lists":res.data.user
          })
        }
      })
    }
  },
  register(){
    wx.navigateTo({
      url: '../enter/enter',
    })
  }
   
  
})