import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import router from './router'
import axios from 'axios'


axios.defaults.baseURL = 'https://my-login-fastapi.herokuapp.com/'
//dev_api_url
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

createApp(App).use(store).use(router, axios).mount('#app')
