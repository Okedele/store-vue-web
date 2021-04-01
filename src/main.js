import Vue from 'vue';
import VeeValidate from 'vee-validate'
import App from './app/App.vue';
import router from './app/router';
import store from './app/store';
import axios from 'axios'

window.axios = axios
axios.defaults.baseURL = 'https://store-adonis-api.herokuapp.com'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
