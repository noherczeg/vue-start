define([], () => {
  return [
    {path: '/', component: resolve => require(['./home/home'], resolve)},
    {path: '/links', component: resolve => require(['./links/links'], resolve)}
  ]
});
