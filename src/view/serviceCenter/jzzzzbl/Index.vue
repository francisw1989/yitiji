<template>
    <div class="boxWapAll2 top25 clearfix">
        <div class="jjBoxWap ">
            <router-link :to="v.path||'/'"  class="jjBox clearfix" v-for="(v, i) in m" :key="i">
                <div class="m-flex-wap" style="margin-top: 35px">
                    <div class="m-flex-per">
                        <div class="a1 clearfix">
                            <div class="a2 clearfix">
                                <i :class="'icoAll top30 ' + v.ico"></i>
                            </div>
                        </div>
                    </div>
                    <div class="m-flex-per">
                        <p class="font24b p colblue" v-html='v.title'></p>
                    </div>
                </div>
            </router-link>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "JzzzzblIndex",
    data() {
        return {
            m: [
                {path: '/serviceCenter/jzzzzbl/a', title: '申报暂住<br/>登记', ico: 'fIco1'}, 
                {path: '/serviceCenter/jzzzzbl/b', title: '申报暂住<br/>凭条打印', ico: 'fIco2'}, 
                {path: '/serviceCenter/jzzzzbl/c', title: '申办居住证', ico: 'fIco3'}, 
                {path: '/serviceCenter/jzzzzbl/d', title: '居住证<br/>签注申请', ico: 'fIco4'}, 
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
