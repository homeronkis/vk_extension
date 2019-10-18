var bkg = chrome.extension.getBackgroundPage();
document.addEventListener('DOMContentLoaded', function () {
  var vkButton = document.getElementById('vk-button');
  vkButton.addEventListener('click', function (e) {
    bkg.OAuth2.begin()
  }, false)

  var checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', function(e) {
    (e.target.checked ? bkg.enable : bkg.disable)();
  });

  bkg.chrome.storage.sync.get(['psycheaExtension'], function(result){
    checkbox.checked = !!result.psycheaExtension
  })
}, false);
