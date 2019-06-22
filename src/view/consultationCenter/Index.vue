<template>
    <div class="pad30 clearfix">
        <div class="contBox1" @click="goToList(v.ywtypeId, v.title)" v-for="(v, i) in s" :key="i">{{v.title}}</div>
    </div>
</template>

<script>
import emit from '../../emit.js';

export default {
    name: "ConsultationCenter",
    data() {
        return {
            s: []
        }
	},
    components: {
        
    },
    methods: {
        goToList(ywtypeId, title){
            this.$router.push('/consultationCenter/list');
            localStorage.ywtypeTitle = title;
            localStorage.ywtypeId = ywtypeId;
        },
        
    },
    mounted(){
        const t = this;
        // t.s = [
        //     {title: '户政服务'},
        //     {title: '暂住服务'},
        // ]
        emit.$on("changeCannel",(res)=>{
            if(res.s){
                t.s = JSON.parse(JSON.stringify(res.s))
            }else{
                t.s = []
            }
            console.log(t.s)
            
        });
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
