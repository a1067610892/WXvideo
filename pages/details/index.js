// pages/details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    Receive: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // http://api.douban.com/v2/movie/subject/${id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b
    this.getItem(options.itemId)
  },
  // http://api.douban.com/v2/movie/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=
  getItem (id) {
    let _this = this
    wx.request({
      url: 'http://api.douban.com/v2/movie/subject/' + id + '?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success(res) {
        _this.addZero(res.data)
        _this.setData({
          array: res.data
        })
        console.log(res.data)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  Open () {
    this.setData({
      Receive: 1
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /* 补零 */
  addZero (num) {
    if (num.rating.average == 1 || num.rating.average == 2 || num.rating.average == 3 || num.rating.average == 4 || num.rating.average == 5 || num.rating.average == 6 || num.rating.average == 7 || num.rating.average == 8 || num.rating.average == 9) {
      num.rating.average = num.rating.average + '.0'
    }
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