<template>
    <div class="display: inline-block">
        <p class="center font24b colblue">请将身份证放至读卡区</p>
        <div class="faceWap2 clearfix top30">
            <div class="cont relative">
                
            </div>
        </div>
        <div class="top40 center">
            <span class="btns btns-blue btns-big" @click="GetIDCard">开始</span>
        </div>
    </div>
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "ID",
    data() {
        return {

        };
    },
    components: {

    },
    methods: {
        next(){
            emit.$emit('finishID',{
				finishID: true
			})
        },
        GetIDCard(){
            const t = this;
            t.$systemService.GetIDCard(t).then((res)=>{
                localStorage.IDCardBase64 = JSON.stringify(res)
                t.next()
            })
        }
    },
    mounted(){
        const t = this;
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
