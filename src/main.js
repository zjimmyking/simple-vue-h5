import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import lottery from 'vue-lottery';

Vue.use(lottery);

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

import 'vue-area-linkage/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage';
Vue.use(VueAreaLinkage);

import wxUtil from './utils/wxUtil'
Vue.prototype.wxUtil =wxUtil
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
