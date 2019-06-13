<template>
    <div class="modal1">
        <div style="padding-bottom: 60px" class="leftArea clearfix relative">
            <div class="cont">
                <div class="liWap top10" v-for="(v, i) in photoList" :key="i">
                    <div :class="'li ' + v.class" @click="imgChose(i)"></div>
                    <p class="top5 colblue font20">{{v.title}}</p>
                </div>
            </div>
            <div class="btnsWap center">
                <span class="btns btns-big btns-blue">确定</span>    
            </div>
            

        </div>
        <div class="rightArea">
            <div class="cont">
                <img :src="'data:image/png;base64,'+src" alt="">
            </div>
            <div class="center top35">
                <span v-if="showRePaishe" class="btns btns-big btns-grey" @click="repaishe">重新拍摄</span>
                <span v-if="!showRePaishe" class="btns btns-big btns-blue" @click="paishe">拍摄</span>
            </div>
        </div>
    </div>
    
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "Photoshot",
    data() {
        return {
            photoList: [],
            showRePaishe: false,
            src: '',
            photoIndex: 0
        }
	},
    components: {
        
    },
    methods: {
        imgChose(i){
            const t = this;
            t.photoIndex = i;
            for(const v of t.photoList){
                v.class = '';
            }
            t.photoList[i].class = 'active';
            t.photoList = JSON.parse(JSON.stringify(t.photoList));
            if(t.photoList[i].base64DATA){
                t.showRePaishe = true;
                t.src = t.photoList[i].base64DATA;
            }else{
                t.repaishe();
            }
        },
        HPAOpenWindows(){
            const t = this;
            t.$systemService.HPAOpenWindows(t).then((res)=>{
                t.$systemService.LightUp(t)
                t.$systemService.HPAOpenVideo(t)
            })
        },
        initBaseData(res){
            const t = this;
            t.src = res;
            t.showRePaishe = true;
            t.photoList[t.photoIndex].base64DATA = res;
            // 关闭高拍仪窗口
            t.$systemService.HPACloseWindows()
            // 关灯
            t.$systemService.LightOff()
            console.log(res);
        },
        paishe(){
            const t = this;
            t.$systemService.HPATakePhoto(t).then((res)=>{
                t.initBaseData(res)
            })
            
        },
        repaishe(){
            const t = this;
            t.showRePaishe = false;
            t.src = '';
            t.HPAOpenWindows();
        }
    },
    mounted(){
        const t = this;
        t.photoList = window.photoList;
        setTimeout(()=>{
            t.imgChose(0)
        },0)
    }
}
</script>

<style>
@import "../../style.css";
</style>
