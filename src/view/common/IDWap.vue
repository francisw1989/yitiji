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
        goToAction(){
            const t = this;
            localStorage.pageFrom = 'faceWap';
            if(localStorage.beforeType == 2){
                t.$router.push('/ewm')
            }else{
                t.$router.push(localStorage.beforePath || '')
            }
            
        }
    },
    mounted(){
        const t = this;
        emit.$once("finishID",(res)=>{
            // 完成人脸识别
			if(res.finishID){
				this.$router.push('/faceWap');
			}
        });
        window.goToAction  = ()=>{
            t.goToAction()
        };
    }
}
</script>

<style>
@import "../../style.css";
</style>
