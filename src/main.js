import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './scss/main.scss';
import {MediaQueries} from "vue-media-queries";
import VueRouter from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Contacts from "@/views/Contacts.vue";
import NotFound from "@/views/NotFound.vue";

const mediaQueries = new MediaQueries();
Vue.use(mediaQueries);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/contacts', component: Contacts },
        { path: '*', component: NotFound },
    ]
})

new Vue({
    vuetify,
    router,
    mediaQueries,
    render: h => h(App)
}).$mount('#app')
