!function (e) {
  function _(_) {
    for (var o, r, s = _[0], a = _[1], c = _[2], d = 0, u = []; d < s.length; d++) r = s[d], t[r] && u.push(t[r][0]), t[r] = 0;
    for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (e[o] = a[o]);
    for (l && l(_); u.length;) u.shift()();
    return n.push.apply(n, c || []), i()
  }

  function i() {
    for (var e, _ = 0; _ < n.length; _++) {
      for (var i = n[_], o = !0, s = 1; s < i.length; s++) {
        var a = i[s];
        0 !== t[a] && (o = !1)
      }
      o && (n.splice(_--, 1), e = r(r.s = i[0]))
    }
    return e
  }

  var o = {}, t = {"web/profile": 0}, n = [];

  function r(_) {
    if (o[_]) return o[_].exports;
    var i = o[_] = {i: _, l: !1, exports: {}};
    return e[_].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }

  r.m = e, r.c = o, r.d = function (e, _, i) {
    r.o(e, _) || Object.defineProperty(e, _, {enumerable: !0, get: i})
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, r.t = function (e, _) {
    if (1 & _ && (e = r(e)), 8 & _) return e;
    if (4 & _ && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (r.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & _ && "string" != typeof e) for (var o in e) r.d(i, o, function (_) {
      return e[_]
    }.bind(null, o));
    return i
  }, r.n = function (e) {
    var _ = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return r.d(_, "a", _), _
  }, r.o = function (e, _) {
    return Object.prototype.hasOwnProperty.call(e, _)
  }, r.p = "/js/cmodules/";
  var s = window.webpackJsonp = window.webpackJsonp || [], a = s.push.bind(s);
  s.push = _, s = s.slice();
  for (var c = 0; c < s.length; c++) _(s[c]);
  var l = a;
  n.push([166, "bundles/common", "bundles/afa2170c23f6e50ccc200c2b7ecb227e"]), i()
}({
  166: function (e, _, i) {
    e.exports = i("UgHw")
  }, UgHw: function (e, _, i) {
    "use strict";
    i.r(_);
    var o = i("auFU");
    window.Profile = o.default;
    try {
      stManager.done(jsc("web/profile.js"))
    } catch (e) {
    }
  }, auFU: function (__webpack_module__, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("91GP"),
      core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("SRfc"),
      core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pIFo"),
      _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zxIV"),
      _web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Egk5"),
      _web_components_ui_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("D1OX"),
      _web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("98sY"),
      _web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("t7n3"),
      _web_lib_message_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("EasH"),
      _web_lib_fx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("7jxN"),
      _web_lib_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("v+DW"),
      _web_lib_box_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("kcIO"), Profile = {
        toggleInfo: function (e) {
          var _ = ge("profile_full");
          return Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.toggle)(_), Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.toggleClass)(e, "info_shown", Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(_)), !1
        }, showGroups: function (e) {
          if (!1 === Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.checkEvent)(e)) {
            var _ = ge("profile_groups_link");
            return _.oldText = val(_), ajax.post("al_profile.php", {
              act: "groups",
              id: cur.oid
            }, {
              onDone: function (e, i) {
                if (i) {
                  val(_, e), _.onclick = Profile.hideGroups;
                  var o = ge("profile_all_groups");
                  val(o, i), show(o.parentNode)
                } else hide(_)
              }, showProgress: function () {
                val(_, '<div class="progress" id="profile_groups_prg"></div>')
              }, hideProgress: function () {
                val(_, _.oldText)
              }, cache: 1
            }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(e)
          }
        }, hideGroups: function (e) {
          if (!1 === Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.checkEvent)(e)) {
            var _ = ge("profile_groups_link");
            return val(_, _.oldText), _.onclick = Profile.showGroups, hide(ge("profile_all_groups").parentNode), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(e)
          }
        }, photoRemove: function (e, _, i) {
          return cur.viewAsBox ? (cur.viewAsBox(), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(i)) : (cur.hidingPh || (cur.hidingPh = {}), cur.hidingPh[_] ? Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(i) : (ajax.post("al_profile.php", {
            act: "remove_photo",
            photo_id: _,
            hash: cur.options.profph_hash
          }, {
            onDone: function (e, _) {
              var i = ge("profile_photos_about") || ge("profile_photos_module").insertBefore(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.se)('<div class="info_msg" id="profile_photos_about"><div class="msg_text"></div></div>'), ge("page_photos_module"));
              val(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domFC)(i), e), each(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass)("ui_thumb_x_button", ge("page_photos_module")), function () {
                this.tt && this.tt.destroy && this.tt.destroy()
              }), val("page_photos_module", _), _ || hide("profile_photos_module")
            }, showProgress: function () {
              cur.hidingPh[_] = 1
            }, hideProgress: function () {
              cur.hidingPh[_] = 0
            }
          }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(i)))
        }, photoReturn: function (e, _) {
          if (cur.viewAsBox) return cur.viewAsBox();
          ajax.post("al_profile.php", {
            act: "return_photo",
            photo_id: _,
            hash: cur.options.profph_hash
          }, {
            onDone: function (e) {
              each(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByClass)("ui_thumb_x_button", ge("page_photos_module")), function () {
                this.tt && this.tt.destroy && this.tt.destroy()
              }), val("page_photos_module", e), Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re)("profile_photos_about")
            },
            showProgress: addClass.pbind("profile_photos_about", "loading"),
            hideProgress: removeClass.pbind("profile_photos_about", "loading")
          })
        }, editPhoto: function (e) {
          if (cur.viewAsBox) return cur.viewAsBox();
          showBox("/al_profile.php", extend(e || {}, {act: "edit_photo"}), {
            params: {bodyStyle: "padding: 16px 7px"},
            stat: ["tagger.js", "tagger.css"]
          })
        }, deletePhoto: function () {
          if (cur.viewAsBox) return cur.viewAsBox();
          showBox("al_profile.php", {act: "delete_photo_box"})
        }, toggleFan: function (e, _, i, o) {
          if (cur.viewAsBox) return cur.viewAsBox();
          null != cur.toggleFanAct && (i = cur.toggleFanAct), ajax.post("al_fans.php", {
            act: i ? "be_fan" : "not_fan",
            mid: cur.oid,
            hash: _
          }, {
            onDone: function (_) {
              e.firstChild.nextSibling.innerHTML = _, cur.toggleFanAct = !i
            }, progress: e.firstChild
          }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(o)
        }, toggleFave: function (e, _, i, o) {
          if (cur.viewAsBox) return cur.viewAsBox();
          null != cur.toggleFaveAct && (i = cur.toggleFaveAct), ajax.post("fave.php", {
            act: i ? "addPerson" : "deletePerson",
            mid: cur.oid,
            hash: _
          }, {
            onDone: function (_) {
              val(e, _), cur.toggleFaveAct = !i
            },
            showProgress: window.Page && Page.actionsDropdownLock.pbind(e),
            hideProgress: window.Page && Page.actionsDropdownUnlock.pbind(e)
          }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(o)
        }, toggleFriend: function (e, _, i, o, t) {
          if (cur.viewAsBox) return cur.viewAsBox();
          if (i) {
            if (!0 !== t && cur.options.bannedhim) return showBox("al_profile.php", {
              act: "banned_him",
              action: "friend",
              mid: cur.oid
            }).onContinue = Profile.toggleFriend.pbind(e, _, i, !1, !0), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(o);
            stManager.add(["tooltips.css", "tooltips.js"])
          }
          var n,
            r = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.ce)("img", {src: "/images/upload" + (window.devicePixelRatio >= 2 ? "_2x" : "") + ".gif"}, {width: 32}),
            s = e, a = {act: i ? "add" : "remove", mid: cur.oid, hash: _, from: "profile"},
            c = Wall.friendsRecommLogCheckVisited(cur.oid);
          c && (a.ref = "feed" === cur.module && feed ? feed.getModuleRef() : cur.module, c.trackCode && (a.track_code = c.trackCode)), i && (n = Wall.friendsRecommLogGet(!0, cur.oid)).length && (Wall.friendsRecommLogClear(cur.oid), a.logs = n), ajax.post("al_friends.php", a, {
            onDone: function (e, o, t, n, r, s) {
              if (i && cur.onFriendAdd && cur.onFriendAdd(), !e) return nav.reload();
              var a = (ge("profile_am_subscribed") || {}).tt;
              a && a.hide && (a.hide({fasthide: 1}), a.destroy());
              var c = ge("friend_status");
              Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.cleanElems)(c.firstChild), e ? (show(c), val(c, e)) : hide(c), (o ? show : hide)("friend_remove"), r || cur.options.bannedhim ? nav.reload({
                noscroll: !0,
                params: {friends_recomm: 1}
              }) : (t && (ajax.preload("al_friends.php", {
                act: "friend_tt",
                mid: cur.oid,
                hash: _
              }, [t, n]), setTimeout(Profile.friendTooltip, 0)), Profile.addFriendsRecommends(s)), Profile.frDropdownClear(_)
            }, showProgress: function () {
              "BUTTON" == e.tagName ? Object(_web_lib_ui__WEBPACK_IMPORTED_MODULE_10__.lockButton)(e) : hasClass(e, "page_actions_item") ? window.Page && Page.actionsDropdownLock(e) : hasClass(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domFC)(e), "progress") ? show(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domFC)(e)) : s.replaceChild(r, s.firstChild)
            }, hideProgress: function () {
              "BUTTON" == e.tagName ? Object(_web_lib_ui__WEBPACK_IMPORTED_MODULE_10__.unlockButton)(e) : hasClass(e, "page_actions_item") ? window.Page && Page.actionsDropdownUnlock(e) : hasClass(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domFC)(e), "progress") ? hide(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domFC)(e)) : s.replaceChild(s.firstChild, r)
            }, onFail: function (e) {
              if (n && Wall.friendsRecommLogOnFail(n), e) return Object(_web_lib_message_box__WEBPACK_IMPORTED_MODULE_8__.showFastBox)({
                title: getLang("global_error"),
                bodyStyle: "padding: 20px; line-height: 160%;"
              }, e), !0
            }
          }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(o)
        }, friendTTHide: function (e) {
          var _ = (ge("profile_am_subscribed") || {}).tt;
          if (e) for (var i = e.target; i; i = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domPN)(i)) if (i.tagName && hasClass(i, "preq_tt")) return;
          _ && _.hide && _.hide({fasthide: 1}), removeEvent(document, "click", Profile.friendTTHide)
        }, friendTooltip: function (e, _) {
          if (!cur.viewAsBox) {
            if (e) setTimeout(function () {
              removeEvent(document, "click", Profile.friendTTHide), addEvent(document, "click", Profile.friendTTHide)
            }, 0); else {
              var i = (ge("profile_am_subscribed") || {}).tt;
              if (i && i.hide && Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(i.container)) return i.hide({fasthide: 1}), void removeClass("profile_am_subscribed", "profile_frdd_active");
              addClass("profile_am_subscribed", "profile_frdd_active")
            }
            return showTooltip(ge("profile_am_subscribed"), {
              url: "al_friends.php",
              params: {act: "friend_tt", mid: cur.oid, hash: _},
              cache: 1,
              slide: 15,
              hidedt: 1e3,
              shift: [27, -1, e ? 3 : 1],
              className: "preq_tt",
              forcetodown: !0,
              onHide: removeClass.pbind("profile_am_subscribed", "profile_frdd_active")
            })
          }
        }, addFriendsRecommends: function (e) {
          if (e) {
            var _ = ge("profile_friends_recomm");
            if (!_) {
              _ = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.se)(e), Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domInsertAfter)(_, Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domPN)(ge("page_info_wrap")));
              var i = geByClass1("ui_gallery", _);
              Profile.friendsRecommInit(i)
            }
          }
        }, friendsRecommInit: function (e) {
          Wall.friendsRecommInit(e, {
            friendId: cur.oid, onDestroy: function () {
              var _ = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domPN)(e);
              Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re)(_)
            }
          })
        }, friendsRecommHide: function (e, _) {
          var i = ge("profile_friends_recomm");
          if (i) {
            var o = geByClass1("ui_gallery", i), t = gpeByClass("page_block", i), n = domData(o, "code") || "";
            Object(_web_components_ui_gallery__WEBPACK_IMPORTED_MODULE_5__.uiGetGallery)(o).destroy(), Wall.friendsRecommLogSave(["hide_block", vkNow(), cur.module, n], !0), Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re)(t)
          }
          return _ && Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(_)
        }, addRequestMessage: function (e, _) {
          return !showBox("al_friends.php", {act: "request_box", mid: cur.oid}, {
            params: {
              bodyStyle: "padding: 0px",
              width: 502,
              hideButtons: 1
            }
          }, _)
        }, frDropdownPreload: function frDropdownPreload(el, sh, hash) {
          !cur.viewAsBox && cur.oid && ajax.post("al_friends.php", {
            act: "friend_dd",
            mid: cur.oid,
            hash
          }, {
            onDone: function onDone(html, js) {
              if (sh && !ge("page_actions_wrap")) {
                html && Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domPN)(el).appendChild(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.se)(html));
                try {
                  eval(js)
                } catch (e) {
                  Object(_web_lib_debug_tools__WEBPACK_IMPORTED_MODULE_6__.logEvalError)(e, js)
                }
              }
            }, cache: 1
          })
        }, frDropdownClear: function (e) {
          ajax.preload("al_friends.php", {act: "friend_dd", mid: cur.oid, hash: e}, !1)
        }, frListsDDShow: function (e) {
          var _ = ge("page_actions_item_lists");
          if (addClass(_, "page_actions_item_unfolded"), ge("page_actions_sublist")) return clearTimeout(cur.frListsDDHide), void show("page_actions_sublist");
          cur.frListsCats || (cur.frListsCats = cur.options.curCats);
          for (var i, o = [], t = cur.frListsCats, n = [28, 29, 27, 25, 26], r = 0; r < 5; ++r) i = n[r], cur.options.publicLists[i] && o.push('<a class="page_actions_item page_actions_subitem' + (t & 1 << parseInt(i) ? " checked" : "") + '" onclick="Profile.frListsCheck(this, ' + i + ');">' + cur.options.publicLists[i] + "</a>");
          for (var s in cur.options.userLists) if (cur.options.userLists.hasOwnProperty(s) && s < 25) {
            var a = cur.options.userLists[s];
            a.length > 20 && (a = trim(a.substr(0, 18)) + "..."), o.push('<a class="page_actions_item page_actions_subitem' + (t & 1 << parseInt(s) ? " checked" : "") + '" onclick="Profile.frListsCheck(this, ' + s + ');">' + a + "</a>")
          }
          o = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.se)('<div id="page_actions_sublist" onmouseover="Profile.frListsDDShow(event);">' + o.join("") + "</div>"), _.parentNode.appendChild(o)
        }, frListsDDHide: function () {
          clearTimeout(cur.frListsDDHide), cur.frListsDDHide = setTimeout(function () {
            hide("page_actions_sublist"), removeClass("page_actions_item_lists", "page_actions_item_unfolded")
          }, 150)
        }, frListsCheck: function (e, _) {
          var i = hasClass(e, "checked"), o = parseInt(cur.frListsCats);
          i ? o & 1 << _ && (o -= 1 << _) : o & 1 << _ || (o += 1 << _), cur.frListsCats = o, (i ? removeClass : addClass)(e, "checked"), cur.frListsTO && clearTimeout(cur.frListsTO), cur.frListsTO = setTimeout(function () {
            ajax.post("al_friends.php", {act: "save_cats", uid: cur.oid, cats: o, hash: cur.options.catsHash})
          })
        }, submitReqText: function () {
          var e = trim(val("preq_input"));
          if (!e) return elfocus("preq_input");
          var _ = cur.mfid ? cur.mfid : cur.oid;
          ajax.post("al_friends.php", {
            act: "request_text",
            mid: _,
            message: e,
            hash: cur.reqHash
          }, {
            onDone: function (e) {
              if (Object(_web_lib_box_utils__WEBPACK_IMPORTED_MODULE_11__.curBox)() && Object(_web_lib_box_utils__WEBPACK_IMPORTED_MODULE_11__.curBox)().hide(), e) {
                var _ = ge("preq_text");
                val(_, e), _ && show(_.parentNode), (_ = ge("preq_input")) && hide(_.parentNode)
              }
            },
            showProgress: _web_lib_ui__WEBPACK_IMPORTED_MODULE_10__.lockButton.pbind("preq_submit"),
            hideProgress: _web_lib_ui__WEBPACK_IMPORTED_MODULE_10__.unlockButton.pbind("preq_submit")
          })
        }, reqTextChanged: function (e) {
          onCtrlEnter(e, Profile.submitReqText);
          var _ = ge("preq_input"), i = trim(val(_)).replace(/\n\n\n+/g, "\n\n");
          if (_.lastLen !== i.length) {
            _.lastLen = i.length;
            var o = function (e, _, i) {
              for (var o = {
                "&": 5,
                "<": 4,
                ">": 4,
                '"': 6,
                "\n": 4,
                "\r": 0,
                "!": 5,
                "'": 5
              }, t = 0, n = 0, r = !1, s = 0, a = e.length; s < a; s++) {
                var c = o[e.charAt(s)], l = e.charCodeAt(s);
                10 == l && ++n, t += void 0 !== c ? c : l > 128 && l < 192 || l > 1280 ? ("&#" + l + ";").length : 1, !1 === r && (_ && t > _ || i && n > i) && (r = s ? e.substr(0, s) : "")
              }
              return [t, n, !1 === r ? e : r]
            }(i, 240, 4), t = o[0], n = o[1], r = ge("preq_warn");
            o[2] !== i && (t > 240 ? t = 240 : n > 4 && (n = 4), val(_, o[2]), _.lastLen = trim(o[2]).length), t > 200 || n > 4 ? (r.innerHTML = t > 240 ? getLang("friends_exceeds_symbol_limit", t - 240) : n > 4 ? getLang("friends_exceeds_lines_limit", n - 4) : getLang("text_N_symbols_remain", 240 - t), show(r)) : hide(r)
          }
        }, toggleBlacklist: function (e, _, i) {
          if (cur.viewAsBox) return cur.viewAsBox();
          ajax.post("al_settings.php", {
            act: cur.options.bannedhim ? "a_del_from_bl" : "a_add_to_bl",
            id: cur.oid,
            hash: _,
            from: "profile"
          }, {
            onDone: function (_) {
              val(e, _), cur.options.bannedhim = !cur.options.bannedhim
            },
            showProgress: window.Page && Page.actionsDropdownLock.pbind(e),
            hideProgress: window.Page && Page.actionsDropdownUnlock.pbind(e)
          }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(i)
        }, toggleFeedIgnored: function (e, _, i) {
          if (cur.viewAsBox) return cur.viewAsBox();
          ajax.post("al_feed.php", {
            act: cur.options.ignoredhim ? "a_unignore_owner" : "a_ignore_owner",
            owner_id: cur.oid,
            hash: _,
            from: "profile"
          }, {
            onDone: function (_) {
              val(e, _), cur.options.ignoredhim = !cur.options.ignoredhim
            },
            showProgress: window.Page && Page.actionsDropdownLock.pbind(e),
            hideProgress: window.Page && Page.actionsDropdownUnlock.pbind(e)
          }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(i)
        }, showGiftBox: function (e, _, i) {
          return cur.gftbxWasScroll = boxLayerWrap.scrollTop, boxLayerWrap.scrollTop = 0, cur.viewAsBox ? cur.viewAsBox() : !showBox("al_gifts.php", {
            act: "get_gift_box",
            mid: e,
            fr: e == vk.id ? 1 : 0,
            ref: i
          }, {stat: ["gifts.css", "wide_dd.js", "wide_dd.css"], cache: 1}, _)
        }, showHideGiftsBox: function (e) {
          if (cur.viewAsBox) return cur.viewAsBox();
          var _ = getLang("profile_sure_hide_gifts").replace("{link}", '<a href="/settings">').replace("{/link}", "</a>").replace("{link1}", '<a href="/settings?act=privacy">').replace("{/link1}", "</a>"),
            i = Object(_web_lib_message_box__WEBPACK_IMPORTED_MODULE_8__.showFastBox)({
              title: getLang("global_warning"),
              bodyStyle: "line-height: 160%;",
              width: 350
            }, _, getLang("profile_gifts_hide_button"), function () {
              ajax.post("al_profile.php", {act: "hide_gifts", hash: cur.options.gifts_hash}, {
                onDone: function () {
                  Object(_web_lib_fx__WEBPACK_IMPORTED_MODULE_9__.slideUp)("profile_gifts", 200), i.hide()
                }, progress: i.progress
              })
            }, getLang("global_cancel"));
          return Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(e), !1
        }, showNewGift: function (e, _) {
          var i = ge("profile_gifts");
          if (i && e) {
            var o = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.geByTag)("img", geByClass1("module_body", i)),
              t = Object(_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.vkImage)();
            t.src = _ || "/images/gift/" + e + "/" + (window.devicePixelRatio, "96") + ".png";
            var n = function () {
              var e = o[0], _ = e.parentNode, i = o.length;
              e && (addClass(t, "profile_gift_img"), e.parentNode.insertBefore(t, e), _.scrollLeft = e.offsetLeft, animate(_, {scrollLeft: 0}, 200, function () {
                i >= 3 && Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re)(o[o.length - 1])
              }))
            };
            t.width ? n() : addEvent(t, "load", n)
          }
        }, declineFriend: function (e) {
          if (cur.viewAsBox) return cur.viewAsBox();
          ajax.post("al_friends.php", {act: "remove", mid: cur.oid, hash: e}, {
            onDone: function (e) {
              hide("friend_request_actions")
            }
          })
        }, processRelation: function (e, _, i, o) {
          if (cur.viewAsBox) return cur.viewAsBox();
          var t = ge("relation_progress" + _);
          ajax.post("al_profile.php", {
            act: "process_relation",
            mid: _,
            accept: o ? 1 : "",
            full_shown: "",
            hash: i
          }, {
            onDone: function (e) {
              val("relations_wrap", e)
            }, showProgress: function () {
              t.style.left = e.offsetLeft + Math.floor((e.offsetWidth - 32) / 2) + "px", show(t), e.style.visibility = "hidden"
            }, hideProgress: function () {
              e.style.visibility = "visible", hide(t)
            }
          })
        }, fansBox: function (e, _, i) {
          return cur.viewAsBox ? cur.viewAsBox() : !showBox("al_fans.php", {
            act: "box",
            tab: i || "fans",
            oid: e
          }, {cache: 1, stat: ["page_help.css", jsc("web/fansbox.js")]}, _)
        }, giftsBox: function (e, _, i) {
          return cur.viewAsBox ? cur.viewAsBox() : !showBox("al_gifts.php", {
            act: "box",
            tab: i || "received",
            mid: e
          }, {cache: 1, stat: ["gifts.css", "gifts.js"]}, _)
        }, idolsBox: function (e, _) {
          return Profile.fansBox(e, _, "idols")
        }, showClassHint: function (e) {
          var _ = ge("profile_class");
          if (_) {
            var i = cur.classhint = bodyNode.appendChild(Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.ce)("div", {
                id: "profile_class_hint",
                innerHTML: `\n<table cellspacing="0" cellpadding="0">\n  <tr>\n    <td rowspan="2"><div class="pointer"></div></td>\n    <td><div class="content">${e}</div></td>\n  </tr>\n  <tr><td><div class="bottom"></div></td></tr>\n</table>`
              }, {display: "none"})), o = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getXY)(_),
              t = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getSize)(_);
            i.style.opacity = 0, show(i);
            var n = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.getSize)(i),
              r = o[1] - Math.floor((n[1] - t[1]) / 2), s = o[0] + (vk.rtl ? -(n[0] + 10) : t[0] + 10);
            i.style.left = s + (vk.rtl ? -10 : 10) + "px", i.style.top = r + "px";
            var a = animate.pbind(i, {left: s, opacity: 1}, 500, !1),
              c = Object(_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.vkImage)();
            c.onload = a, c.src = "/images/classhint.gif", cur.destroy.push(function (e) {
              e.classhint && e.classhint.parentNode && (e.classhint.parentNode.removeChild(e.classhint), e.classhint = !1)
            }), cur._back && cur._back.hide.push(function () {
              cur.classhint && cur.classhint.parentNode && (cur.classhint.parentNode.removeChild(cur.classhint), cur.classhint = !1)
            })
          }
        }, init: function (e) {
          extend(cur, {
            module: "profile",
            options: e,
            oid: e.user_id,
            postTo: e.user_id,
            editing: !1,
            viewAsWarn: e.view_as_warn,
            viewAsBox: !!e.view_as && function () {
              return setTimeout(Object(_web_lib_message_box__WEBPACK_IMPORTED_MODULE_8__.showFastBox)({
                title: getLang("global_warning"),
                bodyStyle: "padding: 20px; line-height: 160%;"
              }, cur.options.view_as).hide, 2e3), !1
            },
            _back: !e.view_as && {loc: e.loc, show: [], hide: [], text: e.back}
          }), e.view_as && cur.nav.push(function (e, _, i, o) {
            if (!cur._leave) return Object(_web_lib_message_box__WEBPACK_IMPORTED_MODULE_8__.showFastBox)({
              title: getLang("global_warning"),
              bodyStyle: "padding: 20px; line-height: 160%;"
            }, cur.viewAsWarn, getLang("global_continue"), function () {
              cur._leave = !0, nav.go(i)
            }, getLang("global_cancel")), !1;
            cur._leave = !1
          }), e.mail_cache && ajax.preload("al_im.php", {
            act: "a_write_box",
            to: cur.oid
          }, e.mail_cache), ge("profile_wall") && wall.init(extend(e, {automore: 1})), e.class_hint && (cur.clHintTimer = setTimeout(Profile.showClassHint.pbind(e.class_hint), 1e3)), e.invite_hint && (cur.invHintTimer = setTimeout(function () {
            var _ = ge("top_invite_hint");
            showTooltip(_, {
              text: e.invite_hint,
              slide: 30,
              shift: [vk.rtl ? -220 : 0, 0, 0],
              showdt: 0,
              showsp: 500,
              forcetodown: !0,
              className: "invite_tt"
            }), cur.tsUpdated = Profile.inviteHintUpdate, stManager.add(["tooltips.css", "tooltips.js"], cur.tsUpdated)
          }, 1e3)), (cur._back ? cur._back.hide : cur.destroy).push(function (e) {
            clearTimeout((e || cur).clHintTimer), clearTimeout((e || cur).invHintTimer), Profile.friendTTHide(!0)
          }), nav.objLoc.suggest && (delete nav.objLoc.suggest, Profile.suggestFriends()), setTimeout(function () {
            window.FastChat && (window.curFastChat && curFastChat.inited || window.curNotifier && void 0 !== curNotifier.fc) && show("profile_fast_chat")
          }, 100), cur.onPeerStatusChanged = function (e, _, i) {
            if (e == cur.oid) {
              var o = geByClass1("_profile_online");
              "online" == _ ? (i = intval(i), o.innerHTML = '<div class="profile_online_lv">' + getLang("global_online") + "</div>") : "offline" == _ && (o.innerHTML = "")
            }
          };
          var _ = ge("profile_friends_recomm");
          if (_) {
            var i = geByClass1("ui_gallery", _);
            Profile.friendsRecommInit(i)
          }
          setTimeout(Wall.friendsRecommLogSend, 100)
        }, inviteHintUpdate: function () {
          var e = ge("top_invite_hint");
          if (e && e.tt && e.tt.container) {
            var _ = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)("ts_wrap") ? ge("ts_settings") : ge("top_invite_link"),
              i = 0, o = 0;
            vk.rtl ? o = 413 - _.parentNode.parentNode.offsetLeft - _.offsetWidth / 2 + "px" : i = _.parentNode.parentNode.offsetLeft + _.offsetWidth / 2 - 370 + "px", geByClass1("top_pointer", e.tt.container).style.margin = "0px " + o + " 0px " + i
          }
        }, appStatusUpdate: function (e) {
          if (cur.ciApp) {
            var _ = Object(_web_lib_ui__WEBPACK_IMPORTED_MODULE_10__.isChecked)("currinfo_app");
            ajax.post("al_apps.php", {act: "toggle_currinfo", hash: e, exp: _, id: cur.ciApp}, {
              onDone: function (e) {
                vk.id == cur.oid && e && val("current_info", e)
              }
            })
          }
        }, suggestFriends: function () {
          if (cur.viewAsBox) return cur.viewAsBox();
          var e = showBox("al_friends.php", {
            act: "select_friends_box",
            from: "suggest_friends",
            friend_id: cur.oid
          }, {stat: ["privacy.js", "privacy.css", "indexer.js"]});
          e.leaveOnSave = !0, cur.onFlistSave = function (_, i, o) {
            ajax.post("al_friends.php", {
              act: "a_suggest_friends",
              mid: cur.oid,
              ids: _.join(","),
              hash: o
            }, {
              onDone: function (_) {
                e.hide(), Object(_web_lib_box_utils__WEBPACK_IMPORTED_MODULE_11__.showDoneBox)(_)
              }, showProgress: e.showProgress, hideProgress: e.hideProgress
            })
          }
        }, uploadPhotos: function (e, _) {
          if (!((window.XMLHttpRequest || window.XDomainRequest) && (window.FormData || window.FileReader && (window.XMLHttpRequest && XMLHttpRequest.sendAsBinary || window.ArrayBuffer && window.Uint8Array && (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder)))) || !_) return nav.go(e, _);
          if (Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.checkEvent)(_)) return !0;
          cur.onPhotoInputChange = function (i) {
            return window.filesToUpload = i, nav.go(e, _)
          };
          var i = ge("page_upload_photos_input");
          return i || (i = Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.se)('<input\n  id="page_upload_photos_input"\n  class="file page_upload_photos_input"\n  type="file"\n  onchange="cur.onPhotoInputChange(this.files);"\n  multiple="true"\n  accept="image/jpeg,image/png,image/gif"\n  name="photo"\n/>')), i.click(_), !1
        }, hideFillBlock: function (e, _, i, o) {
          e.tt && e.tt.hide && e.tt.hide();
          var t = gpeByClass("page_block", e);
          return t && Object(_web_lib_fx__WEBPACK_IMPORTED_MODULE_9__.slideUp)(t, 200, _web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re.pbind(t)), ajax.post("/al_profile.php", {
            act: "hide_rate_block",
            type: i,
            hash: o
          }), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(_), !1
        }, showProfileBox: function (e, _) {
          return showBox("al_places.php", {
            act: "photos_box",
            uid: e
          }, {stat: ["maps.js", "places.js", "places.css", "ui_controls.js", "ui_controls.css"]}), Object(_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.cancelEvent)(_), !1
        }, initShowAsDropDown: function (e, _, i) {
          var o = ge("page_body"), t = ge("profile_view_as");
          cur.destroy.push(function () {
            nav.objLoc.no_as_init || (Object(_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re)(t), window.viewAsDD = null)
          }), window.viewAsDD ? cur.wdd = Object.assign(cur.wdd || {}, {view_as_dd: window.viewAsDD}) : (o.insertBefore(t, o.firstChild), window.viewAsDD = window.WideDropdown.init("view_as_dd", {
            defaultItems: e,
            chosen: _,
            width: 280,
            url: "hints.php",
            params: {act: "a_json_friends", from: "viewas"},
            noResult: i,
            introText: i,
            noMultiSelect: 1,
            custom: function (e) {
              return !!e.match(/^(https?:\/\/)?vk\.com\/[\w.]{2,32}$/) && [[clean(e), clean(e), i, "/images/camera_c.gif", "", 0, 0, "", 1]]
            },
            onChange: function (e) {
              var _ = cur.wdd.view_as_dd;
              if (1 === e && _.chosen) {
                var i = _.chosen[0] + "";
                if (i.match(/^-?\d+$/) && intval(i)) return cur._leave = !0, void nav.go(Object.assign(nav.objLoc, {
                  as: intval(i),
                  no_as_init: 1
                }));
                ajax.post("al_profile.php", {act: "get_profile_uid", link: i}, {
                  onDone: function (e) {
                    cur._leave = !0;
                    var _ = e[0];
                    _ && _ !== vk.id && WideDropdown.choose("view_as_dd", !1, e)
                  }
                })
              }
            }
          }), show(t))
        }, leaveAsMode: function (e, _) {
          return cur._leave = !0, nav.go(e, _)
        }
      };
    __webpack_exports__.default = Profile
  }
});