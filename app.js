// app.js

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
    headLine: [
      {title: "German Charity Bazaar Handover of 2022`s Donation at the German Embassy in Beijing", date: "17.March 2023", body: "For almost 30 years, the German Charity Christmas Bazaar has traditionally taken place on the first Advent on the grounds of the German Embassy in Beijing. There, people from a wide variety of nations and cultures have the opportunity to get in the mood for Christmas with German delicacies and buying handmade gifts. The proceeds are used to support aid projects in and around Beijing. These projects take care of children, parents and families, sick and disadvantaged people and people with disabilities.Unfortunately, in 2022 the bazaar had to be canceled for the third time in a row due to Covid. Despite this, the participating charities managed to raise over RMB 200,000 in donations.The handover event was under the patronage of the German Ambassador Dr. Patricia Flor, who is very happy that the German Charity Christmas Bazaar can finally take place again this year. With longer opening hours and even more Christmas Flair than ever before!", url: "/images/blog/blog1.jpeg"},
      {title: "Advent wreath in summer?", date: "28.September 2022", body: "In a quarter of a year it will be Christmas. Isn’t that time enough to take care of can  dles, wreath and other Christmas decorations? Not for the Christmas angels! They already have to be busy, because it’s not that long until the Christmas bazaar on December 2, 2023, when many more Advent wreaths are to be put up and decorated, gnomes and Christmas trees are to be sewn, and many other beautiful things are to be created. The Christmas angels have their hands full. Because the hut of the Christmas angels on the Christmas market should and will again this year offer a rich selection of different, beautiful Christmas decorations.", url: "/images/blog/blog2.jpeg"},
      {title: "A success story", date: "3.September 2022", body: "The German Christmas Bazaar has long supported Hong Dandan, an institution that helps blind and visually impaired people. Liu Xinming is a girl who was supported by Hong Dandan. Through Hong Dandan’s cinema project, Liu Xinming learned that blind people can also paint. With the support of her parents and volunteers, she has learned to associate colors with emotions. She puts paint directly on canvas with her fingers – and with success. In August, her first solo exhibition", url: "/images/blog/blog3.jpeg"},
      {title: "The German Christmas Bazaar is looking for you!", date: "8.May 2022", body: " THE CHRISTMAS BAZAAR LIVES……FROM PARTICIPATION! The organisation team of the German Charity Christmas Bazaar is still looking for support for this year’s bazaar on 2 December. This is urgently needed to ensure the organisation and running of the bazaar and to raise money for the Charities. 100% of the proceeds will be donated.If you can imagine spending at least two hours of your time on the day of the bazaar in a pre-Christmas atmosphere for a good cause, we look forward to hearing from you. In particular, we are looking for support for the following activities:  – Admission control of the applicable admission conditions – Ticket sales and advertising for the raffle– at the fundraising campaign ‘Christmas with Heart`– in the coffee and cake house team in setting up and dismantling as well as selling – in the biscuits & jams team in setting up and dismantling as well as selling – in the Christmas Angels team in setting up and dismantling as well as selling – Photographer or accompaniment of the photographer at the photo tent – Father Christmas in Santa costume – Coordination/organisation of deliveries and set-up and dismantling outside bazaar hours Perhaps you would prefer to bake a cake or biscuits? Of course, you can also help in more than one area.For more information and answers to your questions, send an email to contact@charitybasar.cn We look forward to seeing you! Your team of the German Charity Christmas Bazaar ", url: "/images/blog/blog4.jpeg"},
      {title: "Review of the Christmas Bazaar 2018", date: "8.May 2022", body: "As every year, the Christmas Bazaar took place at the end of November on the last weekend before the 1st. Advent on the premises of the German Embassy. The rush of visitors ensured a lot of income, so that a high amount of donations could be handed over to the aid organizations. ", url: "/images/blog/blog5.jpeg"},
    ]
  }
})
