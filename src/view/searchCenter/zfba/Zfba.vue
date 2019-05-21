<template>
    <div class="boxWapAll2 top25 clearfix" style="">
        <div style=" padding: 40px 60px" class="center">
            <div class="baWap1">
                努力让人民群众在每一个司法案件中都感受到公平正义
            </div>
            <router-link :to="item.path||'/'" class="yyBox clearfix" v-for='(item, index) in m' :key="index">
                <div class="a1 top60 clearfix">
                    <div class="a2 top10 clearfix">
                        <i :class="'icoAll top30 ' + item.ico"></i>
                    </div>
                </div>
                <p class="center font24b top30 colblue">{{item.title}}</p>
            </router-link>
            
        </div>
        <div class="baWap2 top50">
            努力让人民群众在每一个司法案件中都感受到公平正义
        </div>
    </div>
</template>

<script>

export default {
    name: "Zfba",
    data() {
        return {
            m:[
                {path: '/searchCenter/zfba/a1', ico: 'ico10', title: '办案信息公开'},
                {path: '/searchCenter/zfba/b', ico: 'ico11', title: '警情公开'},
                {path: '/searchCenter/zfba/c',ico: 'ico12', title: '法律法规查询'}
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
@import "../../../style.css";
</style>
