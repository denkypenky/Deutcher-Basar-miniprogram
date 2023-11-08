Component({
  data: {
    showAppName: false,
    showBackButton: false
  },
  ready() {
    let app = getApp()
    const currentRoute = getCurrentPages()[getCurrentPages().length - 1].route
   
      if (app.globalData.tabPages.includes(currentRoute)) {
        this.setData({
          showAppName: true,
          navBarHeight: app.globalData.navBarHeight
         })
      } else {
        this.setData({
          showBackButton: true,
          navBarHeight: app.globalData.navBarHeight
        })
      }
    
  },
  methods:{
    goBack: function(){
      wx.navigateBack(1)
    },
    goTo: function() {
      wx.navigateTo({
        url: '/pages/landing/landing',
      })
    }
  } 
})