define(function () {
  return {
    hasData: [
      {
        path: '/',
        component: '/src/page/common/index.html'
      },
      {
        path: '/404',
        component: '/src/page/common/404.html'
      },
      {
        path: '/goods',
        component: '/src/page/goods/index.html',
        chidren: [
          {}
        ]
      },
      {
        path: '/dd',
        component: '/src/page/order/order.html'
      },
    ]
  }
})
