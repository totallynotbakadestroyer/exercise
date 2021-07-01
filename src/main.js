import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeadset,
  faBox,
  faTable,
  faQuestionCircle,
  faBolt,
  faTrash,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element';

library.add(faBox, faTable, faHeadset, faQuestionCircle, faBolt, faTrash, faEye, faEyeSlash);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
