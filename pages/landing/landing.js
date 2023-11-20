Page({
  data: {
    profileImg: '/images/tree.jpg',
    expire_second: 244000,
      _timer: null,
      _syncFlag: false,
      d: '00',
      h: '00',
      i: '00',
      s: '00',
      _seconds: 0
  },

onLoad(){
if (this.data._timer) {
              this.data._syncFlag = false;
              clearInterval(this.data._timer)
          }
          let countDownDate = new Date("2023/12/02 00:00:00").getTime();
          let now = new Date().getTime();
          let expire_second2 = countDownDate - now;
          console.log(expire_second2)
          this.setData({
            expire_second: expire_second2
          })
          this.changeFlag()
          
},

  onHide() {
          if (this.data._timer) {
              this.data._syncFlag = false;
              clearInterval(this.data._timer);
          }
  },

      timeUp() {
          this.data._syncFlag = false;
          clearInterval(this.data._timer)
      },

      countDown() {
         
          let seconds = this.data._seconds;
          let [day, hour, minute, second] = [0, 0, 0, 0]
          if (seconds > 0) {
              day = Math.floor(seconds / (60 * 60 * 24))
              hour = Math.floor(seconds / (60 * 60)) - (day * 24)
              minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
              second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
          } else {
              this.timeUp()
              return;
          }
          if (day < 10) {
              day = '0' + day
          }
          if (hour < 10) {
              hour = '0' + hour
          }
          if (minute < 10) {
              minute = '0' + minute
          }
          if (second < 10) {
              second = '0' + second
          }
          this.setData({
              d: day,
              h: hour,
              i: minute,
              s: second
          })
      },

      startData() {
          let seconds = this.data._seconds;
          seconds = Number(this.data.expire_second) / 1000
          if (seconds <= 0) {
              return
          }
          this.countDown()
          let that = this;
          this.data._timer = setInterval(() => {
              seconds--
              that.data._seconds = seconds;
              if (seconds < 0) {
                  that.timeUp()
                  return
              }
              that.countDown()
          }, 1000)
      },
      changeFlag() {
          if (!this.data._syncFlag) {
              this.data._seconds = Number(this.data.expire_second) / 1000;
              this.startData();
              this.data._syncFlag = true;
          }
      }, 
  onShow(){
    
  }
});

