import Vue from 'vue';
import 'reflect-metadata';
import VueTypeScriptInject from 'vue-typescript-inject';
import Vuelidate from 'vuelidate';
import './utilities/register-component-hooks';
// @ts-ignore
import AppComponent from './app.component';
import './utilities/register-service-worker';
import router from './router';
import vuetify from './plugins/vuetify';
import { store } from './store';

Vue.config.productionTip = false;

Vue.use(VueTypeScriptInject);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(AppComponent)
}).$mount('#app');
