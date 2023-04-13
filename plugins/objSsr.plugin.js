import Vue from "vue";
import { BootstrapVue } from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import VueLazyload from 'vue-lazyload'
import Icons from '@atoms/Icons';
import VueMask from 'v-mask'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component("Icons", Icons)

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueMask);

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: require('@/assets/images/default.png'),
//   loading: require('@/assets/images/loading.gif'),
//   placeholder: require('@/assets/images/default.png'),
//   // listenEvents: ['scroll'],
//   attempt: 1,
//   observer: true,
// })


