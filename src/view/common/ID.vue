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
            debugger
            emit.$emit('finishID',{
				finishID: true
			})
        },
        GetIDCard(){
            const t = this;
            // setTimeout(() => {
            //     t.next()
            // }, 2000);
            // return
            t.$systemService.GetIDCard(t).then((res)=>{
                
                localStorage.IDCardBase64 = res
                t.next()
            },(res)=>{
                localStorage.IDCardBase64 = '';
            })
        }
    },
    mounted(){
        const t = this;
        localStorage.IDCardBase64 = '';
        t.$systemService.LightFlash(t, 2);
        t.$systemService.SoundPlayer(t, '请放入身份证')
    }
}
</script>

<style>
@import "../../style.css";
</style>
