<template>
    <div class="wapper">
        <div class="clearfix">
            <span class="btns btns-nom btns-blue right">我的预约</span>
            <span class="firstTit top20">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25 clearfix">
            <div style="margin-top: 200px" class="center">
                <div class="yyBox clearfix" v-for='(item, index) in m' :key="index">
                    <div class="a1 top60 clearfix">
                        <div class="a2 top10 clearfix">
                            <i :class="'icoAll top35 ' + item.ico"></i>
                        </div>
                    </div>
                    <p class="center font24b top30 colblue">{{item.title}}</p>
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
                {ico: 'ico5', title: '户政预约'},
                {ico: 'ico6', title: '交管预约'},
                {ico: 'ico7', title: '出入境预约'}
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
