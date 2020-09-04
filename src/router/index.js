import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/page/Home';

import wxUtil from '../utils/wxUtil'
Vue.use(Router);


const RouterModel = new Router({
  routes: [
    // 登陆
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});
RouterModel.afterEach((to, from) => {
    
  /**
   * 微信分享前初始化 wxConfig
   */
  wxUtil.initConfig(encodeURI(location.origin + to.fullPath))
  wxUtil.share(location.origin + to.fullPath)
})
export default RouterModel
