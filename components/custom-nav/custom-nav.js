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
    goBack: function() {

      // Get the current page stack length
      const pages = getCurrentPages();
      const len = pages.length;
      
      // Check if there are pages to go back to
      if (len > 1) {
        wx.navigateBack({
          delta: 1
        });
      } else {
        // Handle the case when there are no previous pages
        // For example, show a message or perform a different action
        console.log("Cannot go back from first page");
      }
    },
    goTo: function() {
      wx.navigateTo({
        url: '/pages/landing/landing',
      })
    }
  } 
})