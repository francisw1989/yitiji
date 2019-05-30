<template>
  <div style="">
    <div class="container clearfix">
        <div class="maxWidth center boxWap">
            <router-link :to="item.path||'/'" :style="item.style" :class="'indexBox '+item.class" v-for="(item, index) in m1" :key="index">
                <div class="cont">
                    <p class="tit1">{{item.title}}</p>
                    <p class="tit2 top10">{{item.eTitle}}</p>
                </div>
                <div class="icoWap clearfix">
                    <i :class="'icoAll top10 right20 ' + item.ico"></i>
                </div>
            </router-link>
        </div>
        <div class="bmWap center">
            <div class="maxWidth">
                <div :class="'indexBox ' + item.class" :style="item.style" v-for="(item, index) in m2" :key="index">
                    <router-link :to="item.path||'/'">
                        <div class="cont clearfix">
                            <i style="margin-top: 18px" :class="'icoAll '+item.ico"></i>
                        </div>
                    </router-link>
                    <p class="tit ">{{item.title}}</p>
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
                {path: '/serviceCenter/lssfzmkj', ico: 'aIco1', title: '临时身份证明开具', eTitle: 'Issue temporary identification', class: 'clearfix box1', style: { 'marginRight': '15px'}},
                {path: '/serviceCenter/wzjlzmkj/a', ico: 'aIco2', title: '无犯罪记录证明开具', eTitle: 'No criminal record issued', class: 'clearfix box1', style: { 'marginRight': '10px'}},
                {path: '/searchCenter/zfba', ico: 'aIco3', title: '执法信息公开', eTitle: 'Case information disclosure', class: 'clearfix box2 box3'},
                {path: '/serviceCenter/crjjlcx', ico: 'aIco4', title: '因私查询出入境记录', eTitle: 'Exit and entry record query result is printed', class: 'clearfix box2', style: { 'marginRight': '15px'}},
                {path: '/serviceCenter/tyblcrj', ico: 'aIco5', title: '同意申办出入境证件的函打印', eTitle: 'Print approval letter for entry and exit documents', class: 'clearfix box2', style: { 'marginRight': '15px'}},
                {path: '/serviceCenter/jzzzzbl', ico: 'aIco6', title: '居住证自助办理', eTitle: 'Residence permit self-service', class: 'clearfix box2', style: { 'marginRight': '15px'}},
                {path: '/serviceCenter/jtwfcl', ico: 'aIco7', title: '交通违法处理及缴费', eTitle: 'Traffic violation handling and payment ', class: 'clearfix box2', style: { 'marginRight': '10px'}},
                {path: '/searchCenter/jwdt', ico: 'aIco8', title: '警务地图', eTitle: 'The map of police', class: 'clearfix box2'},
            ],
            m2: [
                {path: '/serviceCenter/index', ico: 'bIco1', title: '我要办事', class: 'b b1', style: {backgroundPosition: '28px 24px'}},
                {path: '/appointmentCenter/index', ico: 'bIco2', title: '我要预约', class: 'b b1', style: {backgroundPosition: '24px 24px'}},
                {path: '/searchCenter/index', ico: 'bIco3', title: '我要查询', class: 'b b1', style: {backgroundPosition: '20px 24px'}},
                {path: '/consultationCenter/index', ico: 'bIco4', title: '我要咨询', class: 'b b2', style: {backgroundPosition: '0px 24px'}},
                {path: '/reportCenter/index', ico: 'bIco5', title: '我要举报', class: 'b b2', style: {backgroundPosition: '-4px 24px'}},
                {path: '/complaintCenter/index', ico: 'bIco6', title: '我要投诉', class: 'b b2', style: {backgroundPosition: '-8px 24px'}},
            ]
		};
	},
    components: {
        
    },
    methods: {

    }
}
</script>

<style>
@import "../../style.css";
</style>
