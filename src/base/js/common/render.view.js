define(['jquery', 'text'], function () {
  return {
    render: function (obj) {
      require(['text!' + obj.url], function (template) {
        M(obj.id).html(template);
        obj.cb();
      })
    }
  }
})