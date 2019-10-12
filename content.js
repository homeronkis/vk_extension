function getUserData(userId) {
  console.log(userId, 'USERID')
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.datafuel.ru/user/' + userId + '?fields=screen_name,MBTI,IE,SN,TF,JP',
    true
  );
  xhr.setRequestHeader("Authorization", "Basic " + btoa("psyextention:shikari1"));
  xhr.onload = function(result) {
    console.log(JSON.parse(xhr.response));
      debugger;
      var block =  document.getElementById('profile_short')
      block.innerHTML = '<p>asdasdasd</p>'
  };
  xhr.send();
}

function get_user () {
  if (typeof Profile !== 'undefined') {
    getUserData(cur.oid);
  }
}


window.addEventListener('popstate', function () {
  console.log('popState');
  if (typeof Profile !== 'undefined') {
    getUserData(cur.oid);
    console.log("popState")
  }
});
window.addEventListener('pushstate',function (url) {
  history.pushState(state, title, url);
  console.log(url)
});



window.addEventListener('hashchange', function () {
  console.log('changed!')
});