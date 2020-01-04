import Vue from 'vue';
import 'reflect-metadata';
import VueTypeScriptInject from 'vue-typescript-inject';
// @ts-ignore
import AppComponent from './app.component';
import './register-service-worker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueTypeScriptInject);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(AppComponent)
}).$mount('#app');
