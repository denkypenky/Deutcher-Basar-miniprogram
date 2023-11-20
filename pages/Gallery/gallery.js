
// pages/Angels/angels.js
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
    profileImg: '/images/tree-left.png',
    indicatorDots: true,
    indicatorActiveColor: "#FDC01C",
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 500,
    previousMargin: "70rpx",
    nextMargin: "70rpx",
    galleryList: [
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-13.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/07102020_5.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-17.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-8.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-30.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-4.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-21.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-1.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-35.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-28.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-10.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-16.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-2.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-17.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-33.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-14.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-6.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-9.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-20.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-29.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-5.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-15-2.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-10.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-18.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-16.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-7.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-25.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-24.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-3.jpg' },  
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-27.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-19.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-16.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-32.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-12.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-22.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-26.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-11-3.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-23.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-13-2.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-11.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-12.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/06/basar2019-2.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/05/basar-16-1.jpg' },
    ],
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
