// app.js
//import "countdown.js";
App({
  onLaunch() {
    console.log('Ap has launched')
    wx.loadFontFace({
      family: 'MyCustomFont',
      global: true,
      source: 'url("/fonts/Marcellus-Regular.woff")',
      complete(response) {
        console.log("load")
      }
    })
    
  },
  globalData: {
    userInfo: null,
    language: 'en',
    navBarHeight: wx.getMenuButtonBoundingClientRect().height+ 9 + wx.getSystemInfoSync().statusBarHeight,
    userInfo: null,
    tabPages: ["pages/profile/profile","pages/favourite/favourite","pages/homepage/homepage"],
    calorieGrace: 1.1,
    popUp:false,
    firstLoad: true,
  }
})
