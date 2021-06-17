import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import Contract from '@/views/Contract.vue';
import Products from '@/views/Products.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/contract/:id',
    name: 'contract',
    component: Contract,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
