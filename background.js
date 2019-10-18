var config = {
  storageKey: 'psycheaExtension',
  enabledIcon: 'icons/leaf.png',
  disabledIcon: 'icons/disabled.png',
  vkClientId: '6885501'
}
chrome.config = config;
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get([config.storageKey], function (result) {
    console.log(result[config.storageKey] === true ? config.enabledIcon : config.disabledIcon)
    chrome.browserAction.setIcon({
      path: result[config.storageKey] === true ? config.enabledIcon : config.disabledIcon
    });
  });

    window.disable = function() {
    chrome.storage.sync.set({
      [config.storageKey]: false
    });
  }

  window.enable = function() {
    chrome.storage.sync.set({
      [config.storageKey]: true
    })
  };

  window.OAuth2 = {
    init: function () {
      this._authorization_url = 'https://oauth.vk.com/authorize'
      this._redirect_uri = 'https://oauth.vk.com/blank.html';
      this._version = '5.102';
      this._client_id = config.vkClientId;
    },

    begin: function () {
      var url = this._authorization_url +
        '?client_id=' + this._client_id +
        '&redirect_uri=' + this._redirect_uri +
        '&v=' + this._version +
        '&response_type=token&scope=offline';
      var self = this;
      chrome.tabs.create({url: url, selected: true}, function (data) {
        chrome.tabs.onUpdated.addListener(function (tabId, moveInfo) {
          if (tabId === data.id && moveInfo.status === 'loading' && moveInfo.url.startsWith(self._redirect_uri)) {
            chrome.tabs.get(tabId, function (tab) {
              chrome.tabs.remove(tabId);

              var access_token = tab.title.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
              var user_id = tab.title.match(/user_id=(\d+)/)[1];

              var xhr = new XMLHttpRequest();
              xhr.open("POST", "http://163.172.160.127/api/social/vk/token", true);
              xhr.setRequestHeader("Content-Type", "application/json");
              xhr.onload = function () {
                  chrome.storage.sync.set({'access_token': access_token, 'user_id': user_id})
              };
              var data = JSON.stringify({"access_token": access_token, "user_id": user_id })
              xhr.send(data);
              chrome.storage.sync.set({[config.storageKey]: true})
            })
          }
        })
      });
    },
  }

  OAuth2.init()
})
