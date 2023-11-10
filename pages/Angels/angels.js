
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
    calendarList: [
      { url: '/images/img26.png' },
      { url: '/images/img27.png' },
      { url: '/images/img35.png' },
    ],
    wreathsList: [
      { url: '/images/img01.png' },
      { url: '/images/img02.png' },
      { url: '/images/img03.png' },
      { url: '/images/img04.png' },
      { url: '/images/img05.png' },
      { url: '/images/img06.png' },
      { url: '/images/img07.png' },
      { url: '/images/img08.png' },
      { url: '/images/img09.png' },
      { url: '/images/img11.png' },
      { url: '/images/img12.png' },
      { url: '/images/img13.png' },
      { url: '/images/img15.png' },
      { url: '/images/img16.png' },
      { url: '/images/img19.png' },
      { url: '/images/img23.png' },
      { url: '/images/img24.png' },
      { url: '/images/img25.png' },
      { url: '/images/img36.jpg' },
      { url: '/images/img37.jpg' },
      { url: '/images/img38.jpg' },
      { url: '/images/img44.jpg' },
      { url: '/images/img45.jpg' },
      { url: '/images/img46.jpg' },
      { url: '/images/img47.jpg' },
      { url: '/images/img48.jpg' },
      { url: '/images/img50.jpg' }
    ],
    othersList: [
      { url: '/images/img10.png' },
      { url: '/images/img17.png' },
      { url: '/images/img18.png' },
      { url: '/images/img20.png' },
      { url: '/images/img21.png' },
      { url: '/images/img22.png' },
      { url: '/images/img28.png' },
      { url: '/images/img29.png' },
      { url: '/images/img30.png' },
      { url: '/images/img31.png' },
      { url: '/images/img32.png' },
      { url: '/images/img33.png' },
      { url: '/images/img34.png' },
      { url: '/images/img39.jpg' },
      { url: '/images/img40.jpg' },
      { url: '/images/img41.jpg' },
      { url: '/images/img42.jpg' },
      { url: '/images/img43.jpg' },
      { url: '/images/img49.jpg' },
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
