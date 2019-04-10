// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router'
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#cpp',    //这里绑定的是index.html中的id为cpp的div元素
  router,
  render: h => h(App)
  // 这里的render: h => h(App)是es6的写法
  // 转换过来就是：  暂且可理解为是渲染App组件
  // render:(function(h){
  //     return h(App);
  // });
})

router.push('/goods')
