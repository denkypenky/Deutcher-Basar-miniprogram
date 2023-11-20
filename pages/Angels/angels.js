
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
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img27.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img35.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img51.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/11/Filzkalender-gruen.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/11/Filzkalender-rot.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/11/DIY-Kalender2.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/11/DIY-Kalender1.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/11/Adventskalender_klein_verpackt.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2022/11/Adventskalender_gross_verpackt.jpg' },
    ],
    wreathsList: [
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img01.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img02.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img03.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img04.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img05.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img06.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img07.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img08.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img09.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img11.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img12.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img13.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img15.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img16.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img37.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img23.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img24.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img25.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img50.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img49.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img48.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img42.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img41.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img40.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img39.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img38.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img36.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img17.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img47.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img37.jpg' },
    ],
    othersList: [
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img19.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img18.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img20.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img21.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img22.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img28.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_Img29.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img30.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img31.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img32.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img33.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img34.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img46.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img45.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img44.jpg' },
      { url: 'http://charitybasar.cn/wp-content/uploads/2023/11/2023_Angel_img43.jpg' },
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
