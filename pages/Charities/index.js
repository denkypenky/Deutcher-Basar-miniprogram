// pages/Charities/charities.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {
    const charities = app.globalData.charities
    console.log(charities)
    this.setData({
      charities: charities
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
      url: `/pages/Charities/show?index=${e.currentTarget.dataset.index}`,
    }) 
  }
})