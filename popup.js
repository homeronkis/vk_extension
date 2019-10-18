var bkg = chrome.extension.getBackgroundPage();
document.addEventListener('DOMContentLoaded', function () {
  var vkButton = document.getElementById('vk-button');
  vkButton.addEventListener('click', function (e) {
    bkg.OAuth2.begin()
  }, false)

  var enable = document.getElementById('enable');
  enable.addEventListener('click', function () {
    console.log('here')
    bkg.enable()
  })

  var disable = document.getElementById('disable');
  disable.addEventListener('click', function () {
    bkg.disable()
  })

  var checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', function(e) {
    (e.target.checked ? bkg.enable : bkg.disable)();
  });

  bkg.storage.sync.get([], function(result){
    checkbox.checked = !!result.psycheaExtension
  })
}, false);
