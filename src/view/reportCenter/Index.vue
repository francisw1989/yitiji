<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25" style="padding: 20px 30px">
            <div class="cxCont clearfix" v-for="(v, i) in m" :key="i">
                <i :class="'top40 icoAll ' + v.ico "></i>
                <p class="top30">{{v.title}}</p>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "ReportCenter",
    data() {
        return {
            m:[
                {ico: 'eIco1', title: '交通有奖随手拍'},
                {ico: 'eIco2', title: '扫黑除恶有奖举报'},
                {ico: 'eIco3', title: '涉外举报'},
                {ico: 'eIco4', title: '涉毒举报'},
                {ico: 'eIco5', title: '涉黄涉赌举报'},
            ]
        }
	},
    components: {
        
    },
    methods: {
        
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
