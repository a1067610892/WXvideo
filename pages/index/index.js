Page({
  /* 页面的初始数据 */
  data: {
    indexId: 0,
    array: [],
    listHeight: 0,
    countArr: []
  },
  /* 点击切换 */
  switch (e) {
    if (e.currentTarget.dataset.current == 1 && this.data.indexId == 0) {
      this.setData({
        indexId: 1
      })
    } else if (e.currentTarget.dataset.current == 0 && this.data.indexId == 1) {
      this.setData({
        indexId: 0
      })
    }
  },
  /* 滑动切换 */
  slide (e) {
    this.setData({
      indexId: e.detail.current
    })
  },
  /* 获取数据 */
  getData() {
    let _this = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=39&client=&udid=',
      method: 'GET',
      header: {
        "Content-Type": "json"
      },
      success(res) {
        console.log(res.data)
        _this.num(res.data.subjects)
        _this.setData({
          array: res.data.subjects
        })
        _this.swiperHeight()
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /* 把观看人数超过万的简化 */
  num (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].collect_count > 10000) {
        arr[i].collect_count = ((arr[i].collect_count / 10000).toFixed(2).slice(0, -1)) + '万'
      }
    }
  },
  /* 动态计算swiper组件的高度 */
  swiperHeight () {
    this.setData({
      listHeight: (302 * this.data.array.length) + 'rpx'
    })
  },
  getInto (e) {
    let event = e.currentTarget.dataset.id
    wx.navigateTo ({
      url: '../details/index?itemId=' + event
    })
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