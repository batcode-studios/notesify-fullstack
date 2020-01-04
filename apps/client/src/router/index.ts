import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '../views/home/home.component';
import AboutComponent from '../views/about/about.component';

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

const router = new VueRouter({
  routes
});

export default router;
