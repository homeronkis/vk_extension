chrome.runtime.onInstalled.addListener(function () {
    window.disable = function() {
    chrome.storage.sync.set({
      psycheaExtension: false
    })
  }

  window.enable = function() {
    chrome.storage.sync.set({
      psycheaExtension: true
    })
  };

  window.OAuth2 = {
    init: function () {
      this._authorization_url = 'https://oauth.vk.com/authorize'
      this._client_id = '6885501';
      this._redirect_uri = 'https://oauth.vk.com/blank.html';
      this._scopes = ['friends'];
      this._version = '5.102';
    },

    begin: function () {
      var url = this._authorization_url +
        '?client_id=' + this._client_id +
        '&redirect_uri=' + this._redirect_uri +
        '&scopes=' + this._scopes.join(',') +
        '&v=' + this._version +
        '&response_type=token&revoke=1';
      var self = this;

      chrome.tabs.create({url: url, selected: true}, function (data) {
        chrome.tabs.onUpdated.addListener(function (tabId, moveInfo) {
          if (tabId === data.id && moveInfo.status === 'loading' && moveInfo.url.startsWith(self._redirect_uri)) {
            chrome.tabs.get(tabId, function (tab) {
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
