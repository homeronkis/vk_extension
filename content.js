function setUserData(userId) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    'GET',
    'https://api.datafuel.ru/user/' + userId + '?fields=screen_name,MBTI,groups,IE,SN,TF,JP',
    true
  );
  xhr.setRequestHeader("Authorization", "Basic " + btoa("psyextention:shikari1"));
  xhr.onload = function(result) {
      var response = JSON.parse(xhr.response);
    function field(name, value) {
      var node = document.createElement("div");
      node.className += 'extension_field';

      node.innerHTML = '<a href="https://typeplanet.ru/type-descriptions/"  class="head" style="color: #828282;">' + name + ':<a/> ' + value;

      return node;
    }
    function fieldLink(name) {
      var node = document.createElement("a");
      node.className += 'extension_field';
      links = {
        INTJ: "https://typeplanet.ru/type-descriptions/intj",
        INFJ: "https://typeplanet.ru/type-descriptions/infj",
        INTP: "https://typeplanet.ru/type-descriptions/intp",
        INFP: "https://typeplanet.ru/type-descriptions/infp",
        ISTJ: "https://typeplanet.ru/type-descriptions/istj",
        ISFJ: "https://typeplanet.ru/type-descriptions/isfj",
        ISTP: "https://typeplanet.ru/type-descriptions/istp",
        ISFP: "https://typeplanet.ru/type-descriptions/isfp",
        ENTJ: "https://typeplanet.ru/type-descriptions/entj",
        ENFJ: "https://typeplanet.ru/type-descriptions/enfj",
        ENTP: "https://typeplanet.ru/type-descriptions/entp",
        ENFP: "https://typeplanet.ru/type-descriptions/enfp",
        ESTJ: "https://typeplanet.ru/type-descriptions/estj",
        ESFJ: "https://typeplanet.ru/type-descriptions/esfj",
        ESTP: "https://typeplanet.ru/type-descriptions/estp",
        ESFP: "https://typeplanet.ru/type-descriptions/esfp",
      };
      node.setAttribute("href", links[response.MBTI]);
      node.innerHTML = '<span id="link_mbti" class="head" style="color: #828282;">' + name + ':<span/> ' + response.MBTI;

      return node;
    }
    function calculation(value, name, spare) {
      var node = document.createElement("div");
      node.className += 'extension_field';
      if (value <= 50) {
        value = 100 - value;
      } else {
        name = spare;
      }

      node.innerHTML = '<span class="head" style="color: #828282;">' + name + ':</span> ' + Math.round(value) + '%';

      return node;
    }
    var style = document.createElement('style');
    style.innerHTML = `
  .extension_field {
  color: #2a5885;
    width: 192px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 5px;
  }
  `;
    document.head.appendChild(style);
    var container = document.getElementById('profile_short');
      container.prepend(calculation(response.IE, 'Экстраверт', 'Интроверт'));
      container.prepend(calculation(response.JP, 'Иррационал', 'Рационал'));
      container.prepend(calculation(response.SN, 'Интуит', 'Сенсорик'));
      container.prepend(calculation(response.TF, 'Этик', 'Логик'));
      container.prepend(fieldLink('Психотип по MBTI'));
      container.prepend(field('Общие группы', response.groups));
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
