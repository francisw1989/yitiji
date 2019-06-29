<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25" style="padding: 20px 30px">
            <div @click="nav($event, v)" class="cxCont cxCont1 clearfix" v-for="(v, i) in m" :key="i">
                <i class="top40 icoAll" :style="'background-image:url('+v.iconUrl+')'"></i>
                <p class="top30">{{v.moduleName}}</p>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "SearchCenter",
    data() {
        return {
            m:[
                {path: '/searchCenter/sfz', ico: 'cIco1', title: '身份证办证进度查询'},
                {path: '/searchCenter/jzz', ico: 'cIco2', title: '居住证办理进度查询'},
                {path: '/searchCenter/crjbl', ico: 'cIco3', title: '出入境办理进度查询'},
                {path: '/searchCenter/crjzj', ico: 'cIco4', title: '出入境证件查询'},
                {path: '/searchCenter/jdc', ico: 'cIco5', title: '机动车违法查询'},
                {path: '/searchCenter/jsz', ico: 'cIco6', title: '驾驶证记分查询'},
                {path: '/searchCenter/sacl', ico: 'cIco7', title: '涉案车辆暂扣信息查询'},
                {path: '/searchCenter/zfba', ico: 'cIco8', title: '执法办案信息公开查询'},
                {path: '/searchCenter/tmcx', ico: 'cIco9', title: '同名查询'},
                {path: '/searchCenter/jwdt', ico: 'cIco10', title: '警务地图'},
            ]
        }
	},
    components: {
        
    },
    methods: {

        initMenu(){
            const t = this;
            let dosetInt = setInterval(()=>{
                if(window.menus){
                    clearInterval(dosetInt);
                    t.m = window.menus.filter((v)=>{
                        return v.moduleCode == '003'
                    })[0].moduleList;
                }
            },100)
        },
        nav(e, v){
            const t = this;
            // 未上线处理
            localStorage.wsxTitle = v.moduleName;
            if(v.isOnline==0){
                t.$router.push('/wsx');
                return;
            }
            if(v.isMaintaine == 1){
                t.$router.push('/whz');
                return;
            }
            localStorage.moduleId = v.id;
            localStorage.beforePath = v.moduleContent;
            localStorage.beforeType = v.moduleType;
            if(v.moduleCode && v.tipsUrl){
                this.$systemService.OpenTipwizard(t, v.moduleCode)
            }
            if( v.moduleContent.indexOf('zfba')>-1 ||
                v.moduleContent.indexOf('jwdt')>-1
            ){
                t.$router.push(v.moduleContent)
                return
            }
            t.$router.push('/idWap');
            
        },
    },
    mounted(){
        const t = this;
        t.initMenu();
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
