require.config({
  baseUrl: '',
  paths: {
    'jquery': 'https://code.jquery.com/jquery-3.2.1.slim.min',
    'popper': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min',
    'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min',
    'vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.9/vue.min',
    'vue_router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min',
    'text': 'https://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    bootstrap: {
      deps: ['jquery']
    }
  }

});

require(['vue', 'vue_router', 'routes'], (Vue, VueRouter, AppRoutes) => {

  Vue.use(VueRouter);

  const router = new VueRouter({
    mode: 'hash',
    routes: AppRoutes,
    linkActiveClass: 'nav-item',
    linkExactActiveClass: 'active'
  });

  new Vue({
    el: '#app',
    router: router
  });

});
