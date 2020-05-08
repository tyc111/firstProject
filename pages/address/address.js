Page({
  data: {
    address: []
  },
  onLoad: function(options) {
    
  },
  onShow: function () {
    // 页面出现在前台时执行
  },
  openAddress: function() {
    wx.chooseAddress({
      success(res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  }
})