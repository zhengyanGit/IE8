define(['jquery', 'renderView', 'common/routerData'], function (M, renderView, routerData) {
  function Router (option) {
    this.id = option.id;
    this.options = option;
    this.hashList = routerData.hasData;
    this.index = null;
    this.mode = 'hash';
    var _this = this;
    this.historyList = [];
    this.init();
  }
  Router.prototype = {
    constructor: Router,
    add: function (sendData) {
      var onoff = true;
      for (var i = 0; i < this.hashList.length; i++) {
        if (this.hashList[i].path == sendData.path) {
          onoff = false;
        }
      }
      if (onoff) this.hashList.push(sendData);
    },
    addEvent: function (obj, type, handle) {
      try {
        obj.addEventListener(type, handle.bind(this), false);
      } catch (e) {
        try {
          obj.attachEvent('on' + type, handle.bind(this));
        } catch (e) {
          obj['on' + type] = handle;
        }
      }
    },
    remove: function (sendData) {
      for (var i = 0; i < this.hashList.length; i++) {
        if (this.hashList[i].path == sendData.path) {
          this.hashList.splice(i, 1);
        }
      }
      for (var j = 0; j < this.historyList.length; j++) {
        if (this.historyList[j].path == sendData.path) {
          this.historyList.splice(j, 1);
          j--;
        }
      }
    },
    push: function (sendData, params) {
      var aElemen = M('<a>');
      var classStr = new Date().getTime();
      var paramsStr = '';
      if (params) {
        paramsStr = this.paramsChange(params);
      }
      aElemen.attr('href', '/#!' + sendData + paramsStr);
      aElemen.attr('display', 'none');
      aElemen.html('<span class=' + classStr + '></span>');
      M('body').append(aElemen);
      M('.' + classStr).click();
      M('.' + classStr).parent().remove();
    },
    next: function (url) {
      var _this = this;
      if (url) {
        setTimeout(function () {
          _this.push(url);
        }, 30)
      }
    },
    reload: function (e) {
      var hash = window.location.hash.replace('#!', '');
      hash = hash.split('?')[0];
      var oldUrl = '';
      if (e) {
        oldUrl = e.oldURL.split('#!')[1];
      }
      this.options.beforRouter && this.options.beforRouter(oldUrl, hash, this.next.bind(this));
      var urlObj = this.testing(hash);
      if (urlObj) {
        document.title = urlObj.title || '';
        renderView.render({
          id: '#' + this.id,
          url: urlObj.component,
          cb: function () {

          }
        });
      } else {
        if (window.location.protocol + '//' + window.location.host + '/' == window.location.href || window.location.protocol + '//' + window.location.host + '/index.html' == window.location.href) {
          this.push('/')
        }
        return
        this.push('/404')
      }
    },
    init: function () {
      this.reload();
      this.addEvent(window, 'hashchange', this.reload);
    },
    testing: function (sendData) {
      for (var i = 0; i < this.hashList.length; i++) {
        if (sendData == this.hashList[i].path) {
          return this.hashList[i];
        }
      }
      return false;
    },
    paramsChange: function (params) {
      var result = '';
      if (params) {
        for (key in params) {
          result += '&' + key + '=' + params[key];
        }
        result = '?' + result.substring(1);
      }
      return result;
    }
  };
  return Router;
})


