Page({
  data: {
    categorie: ["登录", "注册"],
    slide_index: 0,
    error_password:'',
    error_email:''

  },
  onLoad: function(options) {

  },
  change: function(res) {
    console.log(res)
    this.setData({
      slide_index: res.currentTarget.dataset.index
    })
  },
  login: function(e) {

    const x = {
      grant_type: 'password',
      client_id: 'c60de69e571fae852bea53e347a2be36503ebba84247a054cb7eb6549d161ac9',
      client_secret: 'd8491d666ee8749bc348eb25035ed0195dbd6cff586327ba9304013eb0d92734',
      username: e.detail.value.user,
      password: e.detail.value.password
    }
    wx.request({
      url: `https://itfun.tv/oauth/token`,
      method: 'POST',
      data: x,
      //这里的data是要把x带过去，相当于带id {{id：xx}}
      success: res => {
        //本地缓存，把‘票’存起来
        console.log(res)
        wx.setStorageSync('token_type', res.data.token_type)
        wx.setStorageSync('access_token', res.data.access_token)
        //然后再判断，200为请求成功。
        //如果打印res的sratusCode为200 则成功，然后跳转
        if (res.statusCode === 200) {
          //因为跳转到tabBar，所以要用wx.switchTab跳转。（跳转tabBar唯一方式）
          wx.switchTab({
            url: '../mine/mine'
          })
        } else {
          wx.showModal({
            title: '登录信息有误',
            content: '请重新登录',
            //showCancel是是否显示取消按钮的意思
            showCancel: false
          })

        }
      }
    })
  },
  matriculation: function(e) {
 const x ={
   user: {
     last_name: e.detail.value.last_name,
     first_name: e.detail.value.first_name,
     email: e.detail.value.email,
     password: e.detail.value.password,
     sex: e.detail.value.sex ? e.detail.value.sex : 3
   }
 }
 wx.request({
   url:`https://itfun.tv/api/v1/users.json`,
   method:'post',
   data:x,
   success:res =>{
     console.log(res)
     if (res.statusCode == 200){
       wx.setStorageSync('token_type', res.data.token_type)
       wx.setStorageSync('access_token', res.data.access_token)
       wx.showModal({
         title: '注册成功',
         content: '快去学习吧~',
         showCancel:false,
         success(res) {
           if (res.confirm) {
             wx.switchTab({
               url: '../mine/mine',
             })
           } else if (res.cancel) {
             console.log('用户点击取消')
           }
         }
       })
     }else{
       console.log(res)
       let errors = res.data.errors
       this.setData({
         error_email:errors.email ? "*"+errors.email:'',
         error_password:errors.password ? "*" +errors.password :''
       })
     }
   }
 })
  },
  go_home:function(){
    wx.switchTab({
      url:'../index/index'
    })
  }
})