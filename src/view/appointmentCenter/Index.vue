<template>
    <div class="wapper">
        <div class="clearfix">
            <router-link to="/appointmentCenter/myAppointment" class="btns btns-nom btns-blue right">我的预约</router-link>
            <span class="firstTit top20">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25 clearfix">
            <div style="margin-top: 200px" class="center" @click="OpenTipwizard">
                <div @click="nav($event, item.moduleContent)" class="yyBox yyBox1 clearfix" v-for='(item, index) in m' :key="index">
                    <div class="a1 top60 clearfix">
                        <div class="a2 top10 clearfix">
                            <i class="icoAll top35" :style="'background-image:url('+item.iconUrl+')'"></i>
                        </div>
                    </div>
                    <p class="center font24b top30 colblue">{{item.moduleName}}</p>
                </div>
                
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "AppointmentCenter",
    data() {
        return {
            m:[
                {path: '/appointmentCenter/zhyy', ico: 'ico5', title: '户政预约'},
                {path: '/appointmentCenter/jgyy', ico: 'ico6', title: '交管预约'},
                {path: '/appointmentCenter/crjyy',ico: 'ico7', title: '出入境预约'}
            ]
        }
	},
    components: {
        
    },
    methods: {
        OpenTipwizard(){
            this.$systemService.OpenTipwizard('Setup2')
        },
        nav(e, path){
            const t = this;
            localStorage.beforePath = path;
            // if(path.indexOf('lssfzmkj')>-1||path.indexOf('jzzzzbl')>-1){
            //     t.$router.push(path)
            //     return
            // }
            t.$router.push('/idWap');
        },
        initMenu(){
            const t = this;
            let dosetInt = setInterval(()=>{
                if(window.menus){
                    clearInterval(dosetInt);
                    t.m = window.menus.filter((v)=>{
                        return v.moduleCode == '002'
                    })[0].moduleList
                }
            },100)
        },
    },
    
    mounted(){
        const t = this;
        t.initMenu()
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
