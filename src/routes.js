import Vue from 'vue'
import VueRouter from 'vue-router'


import Index from './view/index/Index.vue'

import ServiceCenter from './view/serviceCenter/Index.vue'

import LssfzmkjA from './view/serviceCenter/lssfzmkj/A.vue'
import LssfzmkjB from './view/serviceCenter/lssfzmkj/B.vue'


import WzjlzmkjA from './view/serviceCenter/wzjlzmkj/A.vue'
import WzjlzmkjB from './view/serviceCenter/wzjlzmkj/B.vue'


import JzzzzblIndex from './view/serviceCenter/jzzzzbl/Index.vue'
import JzzzzblA from './view/serviceCenter/jzzzzbl/A.vue'
import JzzzzblB from './view/serviceCenter/jzzzzbl/B.vue'
import JzzzzblC from './view/serviceCenter/jzzzzbl/C.vue'
import JzzzzblD from './view/serviceCenter/jzzzzbl/D.vue'


import Qsgxzmkj from './view/serviceCenter/Qsgxzmkj.vue'

import Zxhkzmkj from './view/serviceCenter/Zxhkzmkj.vue'




import Hkdjnrbg from './view/serviceCenter/Hkdjnrbg.vue'


import JtwfclA from './view/serviceCenter/jtwfcl/A.vue'
import JtwfclB from './view/serviceCenter/jtwfcl/B.vue'


import Crjjlcx from './view/serviceCenter/Crjjlcx.vue'
import Tyblcrj from './view/serviceCenter/Tyblcrj.vue'
import Crjzjfy from './view/serviceCenter/Crjzjfy.vue'

import AppointmentCenter from './view/appointmentCenter/Index.vue'
import Zhyy from './view/appointmentCenter/Zhyy.vue'
import Jgyy from './view/appointmentCenter/Jgyy.vue'
import Crjyy from './view/appointmentCenter/Crjyy.vue'
import MyAppointment from './view/appointmentCenter/MyAppointment.vue'


import SearchCenter from './view/searchCenter/Index.vue'
import Sfz from './view/searchCenter/Sfz.vue'
import Jzz from './view/searchCenter/Jzz.vue'
import Crjbl from './view/searchCenter/Crjbl.vue'
import Crjzj from './view/searchCenter/Crjzj.vue'
import Jdc from './view/searchCenter/Jdc.vue'
import Jsz from './view/searchCenter/Jsz.vue'
import Sacl from './view/searchCenter/Sacl.vue'
import Zfba from './view/searchCenter/Zfba.vue'
import Tmcx from './view/searchCenter/Tmcx.vue'
import Jwdt from './view/searchCenter/Jwdt.vue'

import ConsultationCenter from './view/consultationCenter/Index.vue'
import ReportCenter from './view/reportCenter/Index.vue'
import ComplaintCenter from './view/complaintCenter/Index.vue'

import Container from './view/common/Container.vue'
import Router from './view/common/Router.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Index, name: '首页' },


    { path: '/serviceCenter/', component: Container, redirect: '/serviceCenter/index', children: [
        { path: 'index', component: ServiceCenter, name: '我要办事'},
        { path: 'lssfzmkj', component: Router, redirect: '/serviceCenter/lssfzmkj/a', name: '临时身份证明开具', children: [
            { path: 'a', component: LssfzmkjA, name: '临时身份证明开具'},
            { path: 'b', component: LssfzmkjB, name: '临时身份证明开具'}
        ]},
        { path: 'wzjlzmkj', redirect: '/serviceCenter/wzjlzmkj/a', component: Router, name: '无犯罪记录证明开具', children:[
            { path: 'a', component: WzjlzmkjA, name: '无犯罪记录证明开具'},
            { path: 'b', component: WzjlzmkjB, name: '无犯罪记录证明开具'}
        ]},
        { path: 'jzzzzbl',redirect: '/serviceCenter/jzzzzbl/index', component: Router, name: '居住证自助办理', children: [
            { path: 'index', component: JzzzzblIndex, name: '居住证自助办理'},
            { path: 'a', component: JzzzzblA, name: '申报暂住登记'},
            { path: 'b', component: JzzzzblB, name: '申报暂住凭条打印'},
            { path: 'c', component: JzzzzblC, name: '申办居住证'},
            { path: 'd', component: JzzzzblD, name: '居住证签注申请'}
        ]},
        { path: 'qsgxzmkj', component: Qsgxzmkj, name: '亲属关系证明开具'},
        { path: 'zxhkzmkj', component: Zxhkzmkj, name: '注销户口证明开具'},
        { path: 'hkdjnrbg', component: Hkdjnrbg, name: '户口登记内容变更更正证明开具'},

        { path: 'jtwfcl', redirect: '/serviceCenter/jtwfcl/a', component: Router, name: '交通违法处理与缴费', children: [
            { path: 'a', component: JtwfclA, name: '交通违法处理与缴费'},
            { path: 'b', component: JtwfclB, name: '交通违法处理与缴费'},
        ]},

        { path: 'crjjlcx', component: Crjjlcx, name: '出入境记录查询结果打印'},
        { path: 'tyblcrj', component: Tyblcrj, name: '同意办理出入境证件函打印'},
        { path: 'crjzjfy', component: Crjzjfy, name: '出入境证件费用缴纳'},

    ]},
    

    { path: '/appointmentCenter/', component: Router, redirect: '/serviceCenter/index', children: [
        { path: '/appointmentCenter/index', component: AppointmentCenter, name: '我要预约'},
        { path: '/appointmentCenter/myAppointment', component: MyAppointment, name: '我的预约'},
        { path: '/appointmentCenter/zhyy', component: Zhyy, name: '户政预约'},
        { path: '/appointmentCenter/jgyy', component: Jgyy, name: '交管预约'},
        { path: '/appointmentCenter/crjyy', component: Crjyy, name: '出入境预约'},
    ]},
    

    { path: '/searchCenter/', redirect: '/searchCenter/index'},
    { path: '/searchCenter/index', component: SearchCenter, name: '我要查询'},
    { path: '/searchCenter/sfz', component: Sfz, name: '身份证办证进度查询'},
    { path: '/searchCenter/jzz', component: Jzz, name: '居住证办理进度查询'},
    { path: '/searchCenter/crjbl', component: Crjbl, name: '出入境办理进度查询'},
    { path: '/searchCenter/crjzj', component: Crjzj, name: '出入境证件查询'},
    { path: '/searchCenter/jdc', component: Jdc, name: '机动车违法查询'},
    { path: '/searchCenter/jsz', component: Jsz, name: '驾驶证记分查询'},
    { path: '/searchCenter/sacl', component: Sacl, name: '涉案车辆暂扣信息查询'},
    { path: '/searchCenter/zfba', component: Zfba, name: '执法办案信息公开查询'},
    { path: '/searchCenter/tmcx', component: Tmcx, name: '同名查询'},
    { path: '/searchCenter/jwdt', component: Jwdt, name: '警务地图'},


    { path: '/consultationCenter/index', component: ConsultationCenter, name: '我要咨询'},
    { path: '/reportCenter/index', component: ReportCenter, name: '我要举报'},
    { path: '/complaintCenter/index', component: ComplaintCenter, name: '我要投诉'}
    
];
export default new VueRouter({
    routes
})