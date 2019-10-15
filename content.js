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
    function calculation(value, name, spare) {
      var node = document.createElement("div");
      if (value <= 50) {
        return value = 100 - value;
      } else {
        name = spare;
      }

      node.innerHTML = '<span class="head">' + name + ':</span> ' + Math.round(value) + '%';

      return node;
    }
    var container = document.getElementById('profile_short')
    console.log(response.IE);
    console.log(response.JP);
    console.log(response.SN);
    console.log(response.TF);
      container.appendChild(calculation(response.IE, 'extra', 'intro'))
      container.appendChild(calculation(response.JP, 'irra', 'racio'))
      container.appendChild(calculation(response.SN, 'senso', 'intuit'))
      container.appendChild(calculation(response.TF, 'etic', 'logic'))
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
