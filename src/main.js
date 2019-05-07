import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import App from './App.vue'
import Index from './view/index/Index.vue'
import ServiceCenter from './view/serviceCenter/Index.vue'
import AppointmentCenter from './view/appointmentCenter/Index.vue'
import SearchCenter from './view/searchCenter/Index.vue'
import ConsultationCenter from './view/consultationCenter/Index.vue'

import ReportCenter from './view/reportCenter/Index.vue'

import ComplaintCenter from './view/complaintCenter/Index.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const routes = [
    { path: '/', component: Index, name: '首页' },
    { path: '/serviceCenter/', redirect: '/serviceCenter/index'},
    { path: '/serviceCenter/index', component: ServiceCenter, name: '我要办事'},
    { path: '/appointmentCenter/index', component: AppointmentCenter, name: '我要预约'},
    { path: '/searchCenter/index', component: SearchCenter, name: '我要查询'},
    { path: '/consultationCenter/index', component: ConsultationCenter, name: '我要咨询'},
    { path: '/reportCenter/index', component: ReportCenter, name: '我要举报'},
    { path: '/complaintCenter/index', component: ComplaintCenter, name: '我要投诉'},
    
]
const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
