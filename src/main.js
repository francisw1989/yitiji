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


axios.interceptors.request.use(function (config) {
    // 在发起请求请做一些业务处理
    config.headers.moduleId = localStorage.moduleId || '';
    config.headers.machineId = systemService.GetCode();
    if(localStorage.IDCardBase64){
        config.headers.operateCardNo = JSON.parse(localStorage.IDCardBase64).sIDNo;
    }else{
        config.headers.operateCardNo = window.IDCardBase64.sIDNo
    }
    
    return config;
}, function (error) {
// 对请求失败做处理
    return Promise.reject(error);
});

Vue.prototype.$axios = axios;

Vue.use(ElementUI)
Vue.use(VueResource)

new Vue({
    el: '#app',
    render: h => h(App),
    router
})


