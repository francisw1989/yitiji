<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="zxTitWap">
                <span :class="'span ' + v.active " @click="changeTab(i)" v-for="(v, i) in m" :key="i">
                    <i class="icoAll" :style="'background-image:url('+v._iconUrl+')'"></i>
                    <span class="left15 font22b verMid">{{v.moduleName}}</span>
                </span>
            </div>
            <div v-if="moduleType==2" class="center clearfix">
                <div class="ewmWap" style="margin-top:140px;">
                    <img :src="moduleContent" alt="">
                </div>
                <p class="font24 top30">请扫描二维码，进行面对面咨询</p>
            </div>
            <div v-if="moduleType!=2">
                <router-view></router-view>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "ConsultationDefault",
    data() {
        return {
            m:[
                // {
                //     ico: 'dIco1', 
                //     title: '治安类', 
                //     children: [
                //         {title: '户政服务'},
                //         {title: '暂住服务'},
                //     ]
                // },
                // {
                //     ico: 'dIco2', 
                //     title: '交管类', 
                //     children: [
                //         {title: '交通违法处理'},
                //         {title: '机动车'},
                //         {title: '驾驶证'},
                //         {title: '互联网面签'},
                //     ]
                // },
                // {
                //     ico: 'dIco3', 
                //     title: '出入境类', 
                //     children: [
                //         {title: '电子普通护照'},
                //         {title: '往来港澳通行证'},
                //         {title: '往来台湾通行证'},
                //         {title: '外国人签证业务'},
                //     ]
                // },
                // {
                //     ico: 'dIco4', 
                //     title: '对公业务', 
                //     children: [
                //         {title: '公众聚集场所投入使用、营业前消防安全检查'},
                //         {title: '网站公安备案'},
                //         {title: '行政审批业务'},
                //     ]
                // },
                // {
                //     ico: 'dIco5', 
                //     title: '面对面视频'
                // },
            ],
            currIndex: 0,
            moduleType: '',
            moduleContent: ''
        }
	},
    components: {
        
    },
    methods: {
        changeTab(i){
            const t = this;
            if(this.$route.fullPath!='/consultationCenter/index'){
                this.$router.push('/consultationCenter/index')
            }
            t.moduleType = t.m[i].moduleType;
            if(t.moduleType == 2){
                t.moduleContent = t.m[i].moduleContent
            }
            t.m.forEach((v, index)=>{
                if(i == index){
                    v.active = 'active';
                    t.currIndex = i;
                    v._iconUrl = v.iconClickUrl;
                    emit.$emit('changeCannel',{
                        s: v.children
                    })
                }else{
                    v.active = '';
                    v._iconUrl = v.iconUrl
                }
            })
            t.m = JSON.parse(JSON.stringify(t.m));

        },
        initMenu(){
            const t = this;
            let dosetInt = setInterval(()=>{
                if(window.menus){
                    clearInterval(dosetInt);
                    t.m = window.menus.filter((v)=>{
                        return v.moduleCode == '004'
                    })[0].moduleList;
                    t.m.forEach((v, i)=>{
                        v._iconUrl = v.iconUrl
                    })
                    t.changeTab(0)
                }
                
            },100)
        },
    },
    mounted(){
        const t = this;
        t.initMenu();
        if(this.$route.fullPath!='/consultationCenter/index'){
            this.$router.push('/consultationCenter/index')
        }
        // t.m[0].active = 'active';
        // t.$set(t.m, 0, t.m[0]);    
        // emit.$emit('changeCannel',{
        //     s: t.m[0].children
        // })
    }
}
</script>

<style>
@import "../../style.css";
</style>
