import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './scss/main.scss';
import {MediaQueries} from "vue-media-queries";

const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);

Vue.config.productionTip = false

new Vue({
  vuetify,
  mediaQueries,
  render: h => h(App)
}).$mount('#app')
