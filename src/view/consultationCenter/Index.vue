<template>
    <div class="pad30 clearfix">
        <div class="contBox1" @click="goToList" v-for="(v, i) in s" :key="i">{{v.title}}</div>
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
        goToList(){
            this.$router.push('/consultationCenter/list')
        }
    },
    mounted(){
        const t = this;
        t.s = [
            {title: '户政服务'},
            {title: '暂住服务'},
        ]
        emit.$on("changeCannel",(res)=>{
            t.s = res.s;
		});
    }
}
</script>

<style>
@import "../../style.css";
</style>
