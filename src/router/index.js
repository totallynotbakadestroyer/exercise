import Vue from 'vue';
import VueRouter from 'vue-router';
import Orders from '@/views/Orders.vue';
import SingleOrder from '@/views/SingleOrder.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/:id',
    name: 'SingleOrder',
    component: SingleOrder,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
