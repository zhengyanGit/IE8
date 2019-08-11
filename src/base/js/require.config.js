window.bsteel = window.bsteel || {};
window.bsteel.path = {
  //public:'http://10.70.64.1:8080/statics/',
  public: '../../',
  assets: '../'
};
require.config({
  baseUrl: 'src/base/js',
  paths: {
    jquery: 'lib/jquery-1.7.2.min',
    text: 'lib/text',
    easing: 'lib/jquery.easing.1.3',
    parallax: 'lib/jquery-parallax',
    mousewheel: 'lib/jquery.mousewheel.min',
    template: 'lib/template',
    plupload: 'lib/plupload.full.min',
    TopEsa: 'lib/TopEsa.minhttps-3.2.0.2',
    signMessage: 'lib/signMessage',
    qrcode: 'lib/jquery-qrcode-0.14.0.min',

    jqCommon: 'common/jq.common',
    renderView: 'common/render.view',
    router: 'common/router',
    utils: 'common/utils',


    calendar: 'ui/base.calendar.2.0.0',
    calendarTwo: 'ui/calendar',
    cityQuery: 'ui/base.city.query',
    confirm: 'ui/base.confirm',
    customDialog: 'ui/base.customDialog',
    drag: 'ui/base.drag',
    fuzzy: 'ui/base.fuzzy',
    fuzzyQuery: 'ui/base.fuzzyQuery',
    loop: 'ui/base.loop',
    page: 'ui/base.page',
    scroll: 'ui/base.scroll',
    select: 'ui/base.select',
    slider: 'ui/base.slider',
    status: 'ui/base.status',
    time: 'ui/base.time',
    validate: 'ui/base.validate',
    waiting: 'ui/base.waiting',
    upload: 'ui/jquery.form',
    clip: 'ui/ZeroClipboard',
    tab: 'ui/base.tab',
    form: 'ui/base.form',
    progressBar: 'ui/base.progressBar',
    creatTable: 'ui/base.creatTable',
    upload: 'ui/base.upload',

  },
  shim: {
    jqCommon: {
      deps: ['jquery']
    },
    renderView: {
      deps: ['jquery', 'text']
    },
    router: {
      deps: ['jquery', 'jqCommon']
    },
    qrcode: {
      deps: ['jquery']
    },
    signMessage: {
      deps: ['jquery', 'TopEsa']
    },
    TopEsa: {
      deps: ['jquery']
    },
    plupload: {
      deps: ['jquery']
    },
    easing: {
      deps: ['jquery']
    },
    parallax: {
      deps: ['jquery']
    },
    mousewheel: {
      deps: ['jquery']
    },
    jqCommon: {
      deps: ['mousewheel', 'easing']
    },
    calendar: {
      deps: ['scroll']
    },
    calendarTwo: {
      deps: ['scroll', 'jqCommon']
    },
    cityQuery: {
      deps: ['jqCommon']
    },
    loop: {
      deps: ['jqCommon']
    },
    confirm: {
      deps: ['drag', 'jqCommon', 'font']
    },
    customDialog: {
      deps: ['scroll', 'drag']
    },
    drag: {
      deps: ['jqCommon']
    },
    fuzzy: {
      deps: ['scroll']
    },
    fuzzyQuery: {
      deps: ['scroll']
    },
    upload: {
      deps: ['jqCommon', 'jquery']
    },
    page: {
      deps: ['jqCommon', 'font']
    },
    scroll: {
      deps: ['jqCommon']
    },
    select: {
      deps: ['scroll']
    },
    slider: {
      deps: ['jqCommon']
    },
    status: {
      deps: ['drag', 'jqCommon']
    },
    time: {
      deps: ['jqCommon']
    },
    validate: {
      deps: ['jqCommon']
    },
    waiting: {
      deps: ['jqCommon']
    },
    upload: {
      deps: ['jqCommon']
    },
    clip: {
      deps: ['jqCommon']
    },
    tab: {
      deps: ['jqCommon']
    },
    form: {
      deps: ['validate', 'waiting']
    },
    creatTable: {
      deps: ['jqCommon', 'scroll']
    },
    progressBar: {
      deps: ['jqCommon']
    }
  }
});