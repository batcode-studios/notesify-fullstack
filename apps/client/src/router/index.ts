import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { StartRoutePaths } from '../pages/start/start.routing';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/start'
  },
  ...StartRoutePaths,
  {
    path: '*',
    redirect: '/start'
  }
];

const router = new VueRouter({
  routes
});

export default router;
