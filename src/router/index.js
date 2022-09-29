import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export async function setupRouter(app) {
  app.use(router);
  await router.isReady();
}
