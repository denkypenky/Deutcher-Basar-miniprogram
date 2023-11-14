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
    autoplay: false,
    interval: 3000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    platinumList: [
      { url: '/images/Sponsor2023_Siemens-car.png' },
      { url: '/images/Sponsor2023_volkswagen-car.png' },
      { url: '/images/Sponsor2023_BMW-car.png' },
      { url: '/images/Sponsor2023_DB-SCHENKER-car.png' },
      { url: '/images/Sponsor2023_Hörmann-Logo-car.png' },
    ],
    goldList: [
      { url: '/images/Sponsor2023_DaimlerTruck_car.png' },
      { url: '/images/Sponsor2023_ERGO_car.png' },
      { url: '/images/Sponsor2023_EY_car.png' },
      { url: '/images/Sponsor2023_GSN_car.png' },
      { url: '/images/Sponsor2023_Hyatt_car.png' },
      { url: '/images/Sponsor2023_VisaPassarge_car.png' },
      { url: '/images/Sponsor2023_Schindler_car.png' },
    ],
    silverList: [
      { url: '/images/Sponsor2023_AHK-car2-1.png' },
      { url: '/images/Sponsor2023_AHK-car.png' },
      { url: '/images/Sponsor2023_BigDutchman_car.png' },
      { url: '/images/Sponsor2023_BlueStar_car.png' },
      { url: '/images/Sponsor2023_DBP_car.png' },
      { url: '/images/Sponsor2023_iF_car.png' },
      { url: '/images/Sponsor2023_IQAir_car.png' },
      { url: '/images/Sponsor2023_P3_car.png' },
      { url: '/images/Sponsor2023_PekingPatengruppe_car.png' },
      { url: '/images/Sponsor2023_SunriseKempinski_car.png' },
      { url: '/images/Sponsor2023_The-Bahlsen-Family_car.png' },
    ],
    bronzeList: [
      { url: '/images/Sponsor2023BeijingPostcards_car.png' },
      { url: '/images/Sponsor2023_HimalayanPinksalt_car-1.png' },
      { url: '/images/Sponsor2023JasminJewelier_car.png' },
      { url: '/images/Sponsor2023Landgraf_car.png' },
      { url: '/images/Sponsor2023_LiubaDraws_car-1.png' },
      { url: '/images/Sponsor2023_Pinyinpress_car-1.png' },
      { url: '/images/Sponsor2023QianKun_car.png' },
      { url: '/images/Sponsor2023_RotaryClub_car-1.png' },
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
