import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '../views/home.vue';
import AboutComponent from '../views/about.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComponent
  }
];

export default new VueRouter({
  routes
});
