import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './routes.js'

import App from './App.vue'
import  VueResource  from 'vue-resource'
import axios from 'axios'
import { systemService } from "./service/system.js";
import { errorLogService } from "./service/errorLog.js";
import { javaService } from "./service/java.js";
import { handleService } from "./service/handle.js";
import { Loading } from 'element-ui';
import data from './data.js'
Vue.prototype.$systemService = systemService;
Vue.prototype.$errorLogService = errorLogService;
Vue.prototype.$javaService = javaService;
Vue.prototype.$handleService = handleService;
Vue.prototype.$Loading = Loading;
Vue.prototype.$axios = axios;

Vue.use(ElementUI)
Vue.use(VueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})


