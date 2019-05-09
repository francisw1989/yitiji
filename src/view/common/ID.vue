<template>
    <div class="display: inline-block">
        <p class="center font24b colblue">请将身份证放至读卡区</p>
        <div class="faceWap2 clearfix top30">
            <div class="cont relative">
                
            </div>
        </div>
        <div class="top40 center">
            <span class="btns btns-blue btns-big" @click="next">开始</span>
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
            emit.$emit('goToNext',{
				goToNext: true
			})
        },
    },
    mounted(){
        const t = this;
    }
}
</script>

<style>
@import "../../style.css";
</style>
