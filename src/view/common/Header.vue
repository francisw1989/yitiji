<template>
    <div class="header clearfix">
        <div class="maxWidth clearfix">
            <div class="right top30 right70" v-if="showBtn">
                <span class="icoAll btnIndex" @click="backToIndex"></span>
                <span v-if="showBack" class="icoAll btnBack left25" @click="back"></span>
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
            showBack: true
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
            });
            // 关闭高拍仪窗口
            t.$systemService.HPACloseWindows()
            // 关灯
            t.$systemService.LightOff()
        },
        back(){
            const t = this;
            t.closeSys();
            let btn = document.querySelector('#btnPrev');
            if(btn){
                if(btn.classList.contains('disabled')){
                    // t.backToIndex();
                    this.$router.go(-3)
                }
                btn.click()
                return
            }
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/');
            
        },
        hideBackBtn(){
            const t = this;
            t.showBack = false;
        }
    },
    watch:{
        $route(to,from){
            const t = this;
            this.showBack = true;
            // 首页隐藏所有按钮
            if(to.path != '/'){
                this.showBtn = true;
            }else{
                this.showBtn = false;
                this.$systemService.CloseTipwizard()
            }
            console.log(to.path)
            // 根据路由隐藏返回按钮
            if(to.path == '/idWap' || to.path == '/faceWap' || 
            to.path == '/serviceCenter/wzjlzmkj/d'
            ){
                t.hideBackBtn()
            }
            // 根据条件隐藏返回按钮
            setTimeout(() => {
                if(document.querySelector('#print')){
                    t.hideBackBtn()
                }
            }, 200);
        }
    },
    mounted(){
        const t = this;
        if(t.$route.path != '/'){
            this.showBtn = true
        }
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
