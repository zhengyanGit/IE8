require(['jquery', 'renderView', 'jqCommon', 'router'], function (M, renderView, jqCommon, router) {
  M.define('index', {
    init: function () {
      this.getHead();
      this.getMenu();
      router.add({
        path: '/goods',
        component: '/src/page/goods/index.html'
      });
    },
    getHead: function () {  // 加载头部
      // 头部加载
      renderView.render({
        id: '#header',  // 加载存放在哪个容器上
        url: '/src/page/common/header.html',  // 加载模块的地址
        cb: function () {  //加载之后的回掉函数
          //console.log('头部加载完成')
        }
      });
    },
    getMenu: function () {
      //底部加载
      renderView.render({
        id: '#footer',
        url: '/src/page/common/footer.html',
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
