import {createApp} from 'vue'
import App from './App.vue'
import router from "./router"
import i18n from "./i18n";

import axios from './axios';

import './css/global.css'

const app = createApp(App);

app.config.globalProperties.$axios = axios
app.provide('axios', axios)

app.use(router);
app.use(i18n);
app.mount('#app');