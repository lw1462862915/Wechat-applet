Page({
    onTap: function (event) {
        // wx.navigateTo({
        //     url:"../posts/post"
        // });
         // 有tabBar  组件的话 必须使用   wx.switchTab({ url:'' }） 该方法跳转  
        wx.switchTab({   //有tabBar  组件的话 必须使用 该方法跳转
            url: "../posts/post"  
        });
      
    },
    onReachBottom:function(event){
      console.log('asfasdfa')
    }
})