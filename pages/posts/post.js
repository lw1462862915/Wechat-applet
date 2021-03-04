var postsData = require('../../data/posts-data.js')

Page({
  data: {
    //小程序总是会读取data对象来做数据绑定，这个动作我们称为动作A
    // 而这个动作A的执行，是在onLoad函数执行之后发生的
  },
  onLoad: function () {

    // this.data.postList = postsData.postList
    this.setData({
       postList:postsData.postList
      });
  },

  onReachBottom:function(event){
    console.log('asdfasdfasdf')
  },

  onPostTap:function(event){
    console.log(event)
    var postId = event.currentTarget.dataset.postid
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
      // 路径后加问号链接 可以传参数 
    })
  }
})