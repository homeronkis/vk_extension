chrome.storage.sync.get(['psycheaExtension', 'access_token', 'user_id'], function (result) {
  if (result.psycheaExtension === true) {
    var groups = getMyGroups(result.access_token, result.user_id);
    injectScript(null, 'var userGroups = ' + JSON.stringify(groups), 'body');
    injectScript(chrome.extension.getURL('content.js'), null, 'body');
  }
});

function getMyGroups(access_token, user_id) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.vk.com/method/groups.get?user_id=' + user_id + '&access_token=' + access_token + '&v=5.102&extended=1', false);
    xhr.send();
    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if ('response' in response) {
            return response.response.items;
        }
    }

    return [];
}
function injectScript(file_path, text, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('charset', 'UTF-8');
  file_path ? script.setAttribute('src', file_path) : null;
  text ? script.text = text : null;
  node.appendChild(script);
}
