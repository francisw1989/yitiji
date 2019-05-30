<template>
    <div class="header clearfix">
        <div class="maxWidth clearfix">
            <div class="right top30 right70" v-if="showBtn">
                <span class="icoAll btnIndex" @click="backToIndex"></span>
                <span v-if="!hideBack" class="icoAll btnBack left25" @click="back"></span>
            </div>
            <img src="../../assets/logo.png" class="logo" alt>
        </div>
    </div>
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "Header",
    data() {
        return {
            showBtn: false,
            fromPath: '/',
            hideBack: false
        };
    },
    components: {

    },
    methods: {
        backToIndex(){
            const t = this;
            this.$router.push('/')
            t.closeSys();
        },
        closeSys(){
            const t = this;
            // 关闭键盘
            t.$systemService.CloseKeyBoard(t);
            // 关闭视频 摄像头
            t.$systemService.StopVedio(t).then(()=>{
                t.$systemService.CloseLiveDetect(t)
            })
        },
        back(){
            const t = this;
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/');
            t.closeSys();
        },
        hideBackBtn(){
            const t = this;
            t.hideBack = true;
        }
    },
    watch:{
        $route(to,from){
            this.hideBack = false;
            if(to.path != '/'){
                this.showBtn = true;
            }else{
                this.showBtn = false;
                this.$systemService.CloseTipwizard()
            }
        }
    },
    mounted(){
        const t = this;
        if(t.$route.path != '/'){
            this.showBtn = true
        }
        emit.$on("hideBack",(res)=>{
            if(res.hideBack){
                debugger
                t.hideBackBtn();
            }
        })
    }
}
</script>

<style>
@import "../../style.css";
</style>
