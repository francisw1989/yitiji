<template>
    <div class="boxWapAll2 top25 clearfix">
        <div class="clearfix center" style="margin-top: 100px;">
            <div @click="nav($event, i,)" :class="'jzBox clearfix ' + v.class" v-for="(v, i) in m" :key="i">
                <i class="icoAll" :style="'background-image:url('+v._iconUrl+')'"></i>
                <span class="left15 font24b verMid span">{{v.moduleName}}</span>
            </div>
        </div>
        
    </div>
</template>

<script>
import emit from '../../../emit.js';
export default {
    name: "JzzzzblIndex",
    data() {
        return {
            m: [
                // {path: '/serviceCenter/jzzzzbl/a', title: '申报暂住<br/>登记', ico: 'fIco1'}, 
                // {path: '/serviceCenter/jzzzzbl/b', title: '申报暂住<br/>凭条打印', ico: 'fIco2'}, 
                // {path: '/serviceCenter/jzzzzbl/c', title: '申办居住证', ico: 'fIco3'}, 
                // {path: '/serviceCenter/jzzzzbl/d', title: '居住证<br/>签注申请', ico: 'fIco4'}, 
            ]
        }
	},
    components: {
        
    },
    methods: {
        mouseDown(i){
            const t = this;
            t.m[i]._iconUrl = t.m[i].iconClickUrl;
            t.m = JSON.parse(JSON.stringify(t.m))
        },
        nav(e, index){
            const t = this;
            let v = t.m[index];
            // 未上线处理
            localStorage.wsxTitle = v.moduleName;
            if(v.isOnline==0){
                t.$router.push('/wsx');
                return;
            }
            if(v.isMaintaine == 0){
                t.$router.push('/whz');
                return;
            }
            localStorage.beforePath = v.moduleContent;
            localStorage.moduleId = v.id;
            localStorage.beforeType = v.moduleType;
            this.$router.push('/idWap')
            if(v.moduleCode && v.tipsUrl){
                this.$systemService.OpenTipwizard(t, v.moduleCode)
            }
        },
        initMenu(){
            const t = this;
            let dosetInt = setInterval(()=>{
                if(window.menus){
                    clearInterval(dosetInt);
                    let list = window.menus.filter((v)=>{
                        return v.moduleCode == '001'
                    })[0].moduleList.filter((v)=>{
                        return v.moduleCode == '001003'
                    })[0].moduleList;
                    list.forEach((v, i)=>{
                        v._iconUrl = v.iconUrl;
                        if(i>1){
                            v.class = 'jzBox2';
                        }
                    })
                    t.m = list;
                }
            },100)
        }
        
    },
    
    mounted(){
        const t = this;
        t.initMenu()
    }
}
</script>

<style>
@import "../../../style.css";
</style>
