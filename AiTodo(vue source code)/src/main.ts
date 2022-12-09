import {createApp} from 'vue'
import './style.css'
import App from './view/All.vue'
import router from './router/index';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';

let app = createApp(App)
app.use(Antd);
app.use(router)
app.mount('#app')