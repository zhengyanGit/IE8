define(function () {
  return {
    hasData: [
      {
        path: '/',
        component: '/src/page/common/index.html',
        title: '首页'
      },
      {
        path: '/log',
        title: '登录',
        component: '/src/page/common/log.html'
      },
      {
        path: '/404',
        component: '/src/page/common/404.html',
        title: '暂无找到改资源'
      },
      {
        path: '/goods',
        component: '/src/page/goods/index.html',
        title: '商品',
        chidren: [
          {
            path: '/goods/list',
            component: '/src/page/goods/list.html',
            title: '商品列表',
          },
          {
            path: '/goods/list2',
            component: '/src/page/goods/list2.html',
            title: '商品列表2',
          }
        ]
      },
      {
        path: '/dd',
        title: '订单中心',
        component: '/src/page/order/order.html'
      },
    ]
  }
})
