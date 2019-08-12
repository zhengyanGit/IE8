define(['jquery', 'renderView', 'common/routerData'], function (M, renderView, routerData) {
  function Router (option) {
    this.id = option.id;
    this.options = option;
    this.hashList = routerData.hasData;
    this.index = null;
    this.mode = 'hash';
    var _this = this;
    this.historyList = [];  // 堆栈存储
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
      try { // Chrome、FireFox、Opera、Safari、IE9.0及其以上版本
        obj.addEventListener(type, handle.bind(this), false);
      } catch (e) {
        try { // IE8.0及其以下版本
          obj.attachEvent('on' + type, handle.bind(this));
        } catch (e) { // 早期浏览器
          obj['on' + type] = handle;
        }
      }
    },
    remove: function (sendData) {
      //
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
      if (urlObj) {  // 匹配成功
        document.title = urlObj.title || '';
        renderView.render({
          id: '#' + this.id,  // 加载存放在哪个容器上
          url: urlObj.component,  // 加载模块的地址
          cb: function () {  //加载之后的回掉函数
            //console.log(urlObj.path)
          }
        });
      } else { //失败
        console.log('页面不存在');
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
      console.log('4444', result)
      return result;
    }
  };
  var routerObj = new Router({
    id: 'contain',
    beforRouter: function (from, to, next) {
      console.log(from, to);
      if (to == '/log') {
        next('/');
      } else {
        next();
      }
    }
  });
  M.extend({
    router: routerObj
  })

  return routerObj;
})


