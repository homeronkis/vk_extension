function setUserData(userId) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.datafuel.ru/user/' + userId + '?fields=screen_name,MBTI,IE,SN,TF,JP',
    true
  );
  xhr.setRequestHeader("Authorization", "Basic " + btoa("psyextention:shikari1"));
  xhr.onload = function(result) {
      var response = JSON.parse(xhr.response);
      var block =  document.getElementById('profile_short')
      block.innerHTML = '<p>' + response.first_name + ' ' + response.id + '</p>'
      console.log(response)
  };
  xhr.send();
}

function modifyProfile() {
  if (typeof Profile !== 'undefined' && !Profile.modified) {
      Profile.init = (function (nativeInit) {
        if (window.cur.oid) {
          setUserData(window.cur.oid)
        }

        return function(e) {
          setUserData(e.user_id)

          return nativeInit(e)
        }
      })(Profile.init)
      Profile.modified = true;
    }
}

window.onpopstate = function () {
  modifyProfile()
}

window.history.pushState = (function (nativePushState) {
  return function (a, b, c) {
    modifyProfile()
    nativePushState.apply(this, arguments)
  }
})((window.history.pushState))

modifyProfile();
