function toggleGroups(e) {
    var block = document.getElementById('psychea-extra-groups');
    block.style.display = block.style.display === 'none' ? 'block' : 'none';
    e.innerText = block.style.display === 'block' ? 'Скрыть полный список' : 'Показать полный список';
}
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
    function fieldLink(name) {
      var node = document.createElement("a");
      node.className += 'extension_field';
      links = {
        INTJ: {
            url: "https://typeplanet.ru/type-descriptions/intj",
            title: "найди тайтл и сюда вставь для каждого из типов"
        },
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
      var link = links[response.MBTI];
      node.setAttribute("href", link.url);
      node.innerHTML = '' +
        '<div class="clear_fix profile_info_row">' +
        '  <div class="label fl_l">'+ name + ':</div>' +
        '  <div class="labeled">' + link.title + ' (' + response.MBTI + ')' + '</div>' +
        '</div>';

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
      node.innerHTML = '' +
        '<div class="clear_fix profile_info_row">' +
        '  <div class="label fl_l">'+ name + ':</div>' +
        '  <div class="labeled">' +  + Math.round(value) + '%' + '</div>' +
        '</div>';
      return node;
    }
    function getGroups(name, value) {
      var groups = [];
      if (response.groups) {
          var xhr = new XMLHttpRequest();
          xhr.open(
            'GET',
            'https://api.vk.com/method/groups.getById?group_ids=' + response.groups + '&v=5.102&access_token=44bfe9d644bfe9d644bfe9d63544d6f9ab444bf44bfe9d618c310447a41f43260483d73&fields=name',
             false
          );
          xhr.send()
          groups = JSON.parse(xhr.response).response;
          groups = groups.map(function(el) {
               return '<a href="/public' + el.id + '">' + el.name + '</a>';
          })
      }
      var node = document.createElement("div");
      node.className += 'groups';

      node.innerHTML = '' + 
      '<div class="clear_fix profile_info_row">' + 
      '  <div class="label fl_l">'+ name + ':</div>' + 
      '  <div class="labeled">' +  (groups.slice(0, 7).join(', ') || 'Нет общих групп') + '</div>' + 
      '</div>';
      
      if (groups.length > 7) {
          node.innerHTML += '<a style="margin-bottom: 5px;" class="profile_more_info_link" onclick="toggleGroups(this)">Показать полный список</a>'

          node.innerHTML += '' + 
          '<div class="clear_fix miniblock" id="psychea-extra-groups" style="display: none">' +
          '  <div class="label fl_l">&nbsp;</div>' +
          '  <div class="labeled">' + groups.slice(7).join(', ') + '</div>' +
          '</div>';
      }

      return node;
    }
    var container = document.getElementById('profile_short');
    container.prepend(getGroups('Общие группы', response.groups));
    container.prepend(calculation(response.IE, 'Экстраверт', 'Интроверт'));
      container.prepend(calculation(response.JP, 'Иррационал', 'Рационал'));
      container.prepend(calculation(response.SN, 'Интуит', 'Сенсорик'));
      container.prepend(calculation(response.TF, 'Этик', 'Логик'));
      container.prepend(fieldLink('Психотип по MBTI'));
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
