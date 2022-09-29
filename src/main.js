import { createApp } from 'vue';
import 'ant-design-vue/dist/antd.less';
import './style.less';
import antd from 'ant-design-vue';
import App from './App.vue';
import { setupRouter } from './router';

const app = createApp(App);
app.use(antd);
async function setupApp() {
  await setupRouter(app);

  app.mount('#app');
}
setupApp();
