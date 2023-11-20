// pages/Charities/show.js
const app = getApp()
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  /**
   * Page initial data
   */
  data: {
    indicatorDots: true,
    indicatorActiveColor: "#FDC01C",
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    charititesImage: [
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/12a5a8b185daf14157738518fb0b625e-scaled.jpeg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/f0c16d0e0c0eaa7729fa34dba19cccf0-scaled.jpeg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/76cb8d518b5cb042e1e1bfc216e71f6f.jpeg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/7e2a6eb2f8d8572b640346dd0da73f4c-scaled.jpeg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/cfc5e4a71e70c976005b10991472adb2-scaled.jpeg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2dbe2efeae8f412035781e3bb9e94284-scaled.jpeg' },
    ],

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const charities = app.globalData.charities[parseInt(options.index)]
    this.setData({
      charities: charities
    })
  },

  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
    console.log(this.changeProperty)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onShareAppMessage(e) {
    return {
      title: "Deutscher Charity Weihnachtbasar",
      path: "/pages/landing/landing.wxml"
    }
  },
  onShareTimeline() {
    return {
      title: "Deutscher Charity Weihnachtbasar"
    }
  }
})
