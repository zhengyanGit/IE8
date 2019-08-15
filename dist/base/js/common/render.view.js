define(['jquery', 'render'], function () {
  return {
    render: function (obj) {
      require(['render!' + obj.url], function (template) {
        M(obj.id).html(template);
        obj.cb();
      })
    }
  }
})