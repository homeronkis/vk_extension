chrome.storage.sync.get(['psycheaExtension'], function (result) {
  if (result.psycheaExtension === true) {
    injectScript(chrome.extension.getURL('content.js'), 'body');
  }
});
//
// console.log(typeof cur)
function injectScript(file_path, tag) {
  var node = document.getElementsByTagName(tag)[0];
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', file_path);
  node.appendChild(script);
}
