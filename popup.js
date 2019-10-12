var bkg = chrome.extension.getBackgroundPage();
console.log(bkg)
document.addEventListener('DOMContentLoaded', function () {
  var vkButton = document.getElementById('vk-button');
  vkButton.addEventListener('click', function (e) {
    bkg.OAuth2.begin()
  }, false)

  console.log(enable)
  var enable = document.getElementById('enable');
  enable.addEventListener('click', function () {
    console.log('here')
    bkg.enable()
  })
  var disable = document.getElementById('disable');
  disable.addEventListener('click', function () {
    bkg.disable()
  })
}, false);
