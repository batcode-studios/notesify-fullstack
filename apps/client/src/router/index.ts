import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { StartRoutes } from '../pages/start/start.routing';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/start'
  },
  ...StartRoutes,
  {
    path: '*',
    redirect: '/start'
  }
];

const router = new VueRouter({
  routes
});

export default router;
