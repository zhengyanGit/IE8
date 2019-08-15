require(['jquery', 'renderView', 'jqCommon', 'router'], function (M, renderView, jqCommon, Router) {
  M.define('index', {
    init: function () {
      this.getHead();
      this.getMenu();
      var router = new Router({
        id: 'contain',
        beforRouter: function (from, to, next) {
          if (to == '/log') {
            next('/');
          } else {
            next();
          }
        }
      });
      M.extend({
        router: router
      })
    },
    getHead: function () {  // 加载头部
      // 头部加载
      renderView.render({
        id: '#header',  // 加载存放在哪个容器上
        url: '/page/common/header.html',  // 加载模块的地址
        cb: function () {  //加载之后的回掉函数
          //console.log('头部加载完成')
        }
      });
    },
    getMenu: function () {
      //底部加载
      renderView.render({
        id: '#footer',
        url: '/page/common/footer.html',
        cb: function () {
          //console.log('头底部加载完成')
        }
      });
    },
    getDate: function () {

    },
  })(function () {
    M.index.init();
  });
});
