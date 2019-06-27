<template>
    <div class="boxWapAll2 top25 clearfix" style="">
        <div style=" padding: 40px 60px" class="center">
            <div class="baWap1">
                努力让人民群众在每一个司法案件中都感受到公平正义
            </div>
            <div @click="nav($event, item)" class="yyBox yyBox2 clearfix" v-for='(item, index) in m' :key="index">
                <div class="a1 top60 clearfix">
                    <div class="a2 top10 clearfix">
                        <i class="icoAll top30" :style="'background-image:url('+item.iconUrl+')'"></i>
                    </div>
                </div>
                <p class="center font24b top30 colblue">{{item.moduleName}}</p>
            </div>
            
        </div>
        <div class="baWap2 top50">
            用最大的公开促最大的公正，让权力在阳光下运行。
        </div>
    </div>
</template>

<script>

export default {
    name: "Zfba",
    data() {
        return {
            m:[
                {path: '/searchCenter/zfba/a', ico: 'ico10', title: '办案信息公开'},
                {path: '/searchCenter/zfba/b', ico: 'ico11', title: '警情公开'},
                {path: '/searchCenter/zfba/c',ico: 'ico12', title: '法律法规查询'}
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
                    let parentMenu = window.menus.filter((v)=>{
                        return v.moduleCode == '003'
                    })[0].moduleList;
                    t.m = parentMenu.filter((v)=>{
                        return v.moduleCode == '003008'
                    })[0].moduleList;
                    console.log(t.m)
                }
            },100)
        },
        nav(e, v){
            const t = this;
            localStorage.moduleId = v.id;
            localStorage.beforePath = v.moduleContent;
            if(v.moduleCode && v.tipsUrl){
                this.$systemService.OpenTipwizard(t, v.moduleCode)
            }
            if(v.moduleContent.indexOf('/searchCenter/zfba/b')>-1){
                t.$router.push('/idWap');
            }else{
                t.$router.push(v.moduleContent)
            }
            
        },
    },
    mounted(){
        const t = this;
        t.initMenu();
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
