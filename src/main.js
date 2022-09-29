import { createApp } from 'vue';
// import './style.css';
import 'ant-design-vue/dist/antd.css';
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
