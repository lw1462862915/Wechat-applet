// pages/posts/post-detail/post-detail.js
var postsDate = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //setData({})  不做数据绑定 不要用该方法 

  onLoad: function (options) {
    var postId = options.id
    this.data.currentPostId = postId  //保存到Page data对象中

    var postDate = postsDate.postList[postId] //获取数据 生成对象
    this.setData({...postDate}) 
     //用三个点：扩展运算符；来获取postDate数组内的对象；减少代码量ES6写法
   
    var postsCollected = wx.getStorageSync('postsCollected') //  读取缓存数据
    if (postsCollected){ //判断空值
      var postCollected = postsCollected[postId] 
      if (postCollected){  //再次判断空值
      this.setData({collected:postCollected})
      }
    }else{
      var postsCollected = {}
      postsCollected[postId] = false
      wx.setStorageSync('postsCollected', postsCollected)
    }
  },
  //对缓存数据做事件处理
  onCollectionTap: function () {
    var postsCollected = wx.getStorageSync('postsCollected')
    var collected = postsCollected[this.data.currentPostId] //获取当前缓存的数据
    collected = !collected  //取反
    postsCollected[this.data.currentPostId] = collected
    wx.setStorageSync('postsCollected', postsCollected)
    this.setData({collected})

    wx.showToast({  //交互反馈API
      title: collected? '收藏成功':'取消成功',
      duration:500,
    })
  },
     //删除缓存数据
     onShareTap:function () {
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