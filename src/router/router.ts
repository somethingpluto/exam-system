import { createRouter, createWebHashHistory } from 'vue-router';

import { routes } from './routes';
import { useTitleGuard } from './title-guard';

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})


useTitleGuard(router)
