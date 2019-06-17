<template>
  <div style="">
    <div class="container clearfix">
        <div class="maxWidth center boxWap">
            <div @click="nav($event, index)" :style="item.style" :class="'indexBox '+item.class" v-for="(item, index) in m1" :key="index">
                <div class="cont">
                    <p class="tit1">{{item.module.moduleName}}</p>
                    <p class="tit2 top10">{{item.module.moduleEname}}</p>
                </div>
                <div class="icoWap clearfix">
                    <i :class="'icoAll top10 right20 ' + item.ico" :style="'background-image:url('+item.module.iconUrl+')'"></i>
                </div>
            </div>
        </div>
        <div class="bmWap center">
            <div class="maxWidth">
                <div :class="'indexBox ' + item.class" :style="item.style" v-for="(item, index) in m2" :key="index">
                    <router-link :to="item.moduleContent||'/'">
                        <div class="cont clearfix">
                            <i style="margin-top: 18px" class="icoAll" :style="'background-image:url('+item.iconUrl+')'"></i>
                        </div>
                    </router-link>
                    <p class="tit ">{{item.moduleName}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "index",
    data() {
		return {
			m1: [
                // {path: '/serviceCenter/lssfzmkj', ico: 'aIco1', title: '临时身份证明开具', eTitle: 'Issue temporary identification', class: 'clearfix box1', style: { 'marginRight': '15px'}},
                // {path: '/serviceCenter/wzjlzmkj/d', ico: 'aIco2', title: '无犯罪记录证明开具', eTitle: 'No criminal record issued', class: 'clearfix box1', style: { 'marginRight': '10px'}},
                // {path: '/searchCenter/zfba', ico: 'aIco3', title: '执法信息公开', eTitle: 'Case information disclosure', class: 'clearfix box2 box3'},
                // {path: '/serviceCenter/crjjlcx', ico: 'aIco4', title: '因私查询出入境记录', eTitle: 'Exit and entry record query result is printed', class: 'clearfix box2', style: { 'marginRight': '15px'}},
                // {path: '/serviceCenter/tyblcrj', ico: 'aIco5', title: '同意申办出入境证件的函打印', eTitle: 'Print approval letter for entry and exit documents', class: 'clearfix box2', style: { 'marginRight': '15px'}},
                // {path: '/serviceCenter/jzzzzbl', ico: 'aIco6', title: '居住证自助办理', eTitle: 'Residence permit self-service', class: 'clearfix box2', style: { 'marginRight': '15px'}},
                // {path: '/serviceCenter/jtwfcl', ico: 'aIco7', title: '交通违法处理及缴费', eTitle: 'Traffic violation handling and payment ', class: 'clearfix box2', style: { 'marginRight': '10px'}},
                // {path: '/searchCenter/jwdt', ico: 'aIco8', title: '警务地图', eTitle: 'The map of police', class: 'clearfix box2'},
            ],
            m2: [
                // {path: '/serviceCenter/index', ico: 'bIco1', title: '我要办事', class: 'b b1', style: {backgroundPosition: '28px 24px'}},
                // {path: '/appointmentCenter/index', ico: 'bIco2', title: '我要预约', class: 'b b1', style: {backgroundPosition: '24px 24px'}},
                // {path: '/searchCenter/index', ico: 'bIco3', title: '我要查询', class: 'b b1', style: {backgroundPosition: '20px 24px'}},
                // {path: '/consultationCenter/index', ico: 'bIco4', title: '我要咨询', class: 'b b2', style: {backgroundPosition: '0px 24px'}},
                // {path: '/reportCenter/index', ico: 'bIco5', title: '我要举报', class: 'b b2', style: {backgroundPosition: '-4px 24px'}},
                // {path: '/complaintCenter/index', ico: 'bIco6', title: '我要投诉', class: 'b b2', style: {backgroundPosition: '-8px 24px'}},
            ]
		};
	},
    components: {
        
    },
    methods: {
        recommend(){
            const t = this;
            t.$javaService.recommend(t, '0').then((res)=>{
                res = res.reverse()
                res.forEach((v, i) => {
                    if(i==0 || i==3 || i==4 || i==5 ){
                        v.style = { marginRight: '15px'}
                    }
                    if(i==1|| i==6 ){
                        v.style = { marginRight: '10px'}
                    }
                    if(i==0 ||i==1){
                        v.class = 'clearfix box1'
                    }
                    if(i==2){
                        v.class = 'clearfix box2 box3'
                    }
                    if(i==3 ||i==4 ||i==5 ||i==6 ||i==7){
                        v.class = 'clearfix box2'
                    }
                });
                
                t.m1 = res;
                
                document.querySelector('.boxWap').addEventListener('click', (e) => {
                    this.$systemService.OpenTipwizard('Setup2')
                }, false);
            })
        },
        nav(e, index){
            const t = this;
            let path = t.m1[index].module.moduleContent;
            localStorage.beforePath = path;
            if(path.indexOf('lssfzmkj')>-1||path.indexOf('jzzzzbl')>-1){
                this.$router.push(path)
                return
            }
            this.$router.push('/idWap');
            
        },
    },
    mounted(){
        const t = this;
        t.recommend()
        let setCldo = setInterval(()=>{
            if(window.menus && window.menus.length){
                clearInterval(setCldo)
                t.m2 = window.menus
            }
        }, 100)
        
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
