define(['vue', 'text!links/links.vue'], (Vue, template) => {
  return Vue.extend({
    template: template,
    data: () => {
      return {
        links: [
          {
            'url': 'https://vuejs.org/',
            'title': 'Vue'
          }, {
            'url': 'https://router.vuejs.org/en/',
            'title': 'Vue-router'
          }, {
            'url': 'https://github.com/vuejs/awesome-vue',
            'title': 'Awesome Vue.js'
          }, {
            'url': 'https://twitter.com/vuejs',
            'title': '@vuejs'
          }
        ]
      };
    }
  });
});
