import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Portfolio from './views/portfolio.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

