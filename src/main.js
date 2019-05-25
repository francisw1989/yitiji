import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './routes.js'

import App from './App.vue'
import  VueResource  from 'vue-resource'

import { systemService } from "./service/system.js";
import { errorLogService } from "./service/errorLog.js";
import { javaService } from "./service/java.js";
import { handleService } from "./service/errorLog.js";
Vue.prototype.$systemService = systemService;
Vue.prototype.$errorLogService = errorLogService;
Vue.prototype.$javaService = javaService;
Vue.prototype.$handleService = handleService;



Vue.use(ElementUI)
Vue.use(VueResource)
new Vue({
    el: '#app',
    render: h => h(App),
    router
})


