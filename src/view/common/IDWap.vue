<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="center" style="padding: 60px 80px">
                <ID></ID>
            </div>
        </div>
    </div>
    
</template>

<script>
import ID from './ID.vue';
import emit from '../../emit.js';
export default {
    name: "IDWap",
    data() {
        return {
        }
	},
    components: {
        ID
    },
    methods: {
        
    },
    mounted(){
        const t = this;
        emit.$on("finishID",(res)=>{
            // 完成人脸识别
			if(res.finishID){
				this.$router.push('/faceWap');
			}
		});
    }
}
</script>

<style>
@import "../../style.css";
</style>
