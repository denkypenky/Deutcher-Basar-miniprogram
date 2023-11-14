// pages/Blog/blog.js
const app = getApp()
Page({


  /**
   * Page initial data
   */
  data: {
    /*headLine: [
      {tittle: "German Charity Bazaar Handover of 2022`s Donation at the German Embassy in Beijing"},
      {date: "17.March 2023"},
      {tittle: "Advent wreath in summer?"},
      {date: "28.September 2022"}
      ],*/
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    const headLine = app.globalData.headLine
    console.log(headLine)
    this.setData({
      headLine: headLine
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
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
  },
  goToStory(e) {
    console.log("goToStory event", e)
    console.log("index", e.currentTarget.dataset.index)
    
    // Below to debug and see if we are getting the correct story
    /*const story = this.data.headLine[e.currentTarget.dataset.index]
     console.log("story:", story)*/
    wx.navigateTo({
      url: `/pages/Blog/show?index=${e.currentTarget.dataset.index}`,
    }) 
  }
})