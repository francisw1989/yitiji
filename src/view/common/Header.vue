<template>
    <div class="header clearfix">
        <div class="maxWidth clearfix">
            <div class="right top30 right70" v-if="showBtn">
                <span class="icoAll btnIndex" @click="backToIndex"></span>
                <span v-if="showBack" class="icoAll btnBack left25" @click="back"></span>
            </div>
            <div class="logo left"></div>
            <span class="colfff blod left top30 left20" style="font-size: 40px">{{sysName}}</span>
        </div>
    </div>
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "Header",
    data() {
        return {
            sysName: '',
            logo: '',
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
            t.$router.push('/')
            t.closeSys();
        },
        closeSys(){
            const t = this;
            // 关闭身份证指示灯
            t.$systemService.LightOff(t, 2);
            t.$systemService.LightOff(t, 9);
            t.$systemService.LightOff(t, 6);
            t.$systemService.LightOff(t, 7);
            // 关闭键盘
            t.$systemService.CloseKeyBoard(t);
            // 关闭视频 摄像头
            t.$systemService.StopVedio(t).then(()=>{
                t.$systemService.CloseLiveDetect(t)
            });
            // 关闭高拍仪窗口
            t.$systemService.HPACloseWindows()
            // 关灯
            t.$systemService.HPALightOff()
        },
        back(){
            const t = this;
            let href = window.location.href;
            
            let btn = document.querySelector('#btnPrev');
            try {
                t.closeSys();
            } catch (error) {
                
            }
            if(btn && !btn.classList.contains('disabled') ){
                btn.click()
                return
            }
            if(href.indexOf('consultationCenter')>-1&&!btn){
                this.$router.push('/');
                return
            }
            window.history.length > 1 ? this.$router.go(-1): this.$router.push('/');
            
            
        },
        hideBackBtn(){
            const t = this;
            t.showBack = false;
        }
    },
    watch:{
        $route(to,from){
            const t = this;
            // 跳过人脸识别和身份证验证
            if(localStorage.pageFrom == 'faceWap'){
                if(to.path == '/faceWap'){
                    localStorage.pageFrom = '';
                    console.log('route111')
                    this.$router.go(-2)
                    return
                }else if(to.path == '/idWap'){
                    console.log('route222')
                    localStorage.pageFrom = '';
                    this.$router.go(-1)
                    return
                }
            }
            if(from.path == '/faceWap' && to.path == '/idWap'){
                this.$router.go(-1)
                console.log('route333')
                return
            }
            
            this.showBack = true;
            // 首页隐藏所有按钮
            if(to.path != '/'){
                this.showBtn = true;
            }else{
                // 首页
                debugger
                localStorage.moduleId = '';
                localStorage.beforePath = '';
                localStorage.pageFrom = '';
                localStorage.wsxTitle = '';
                localStorage.beforeType = '';
                this.showBtn = false;
                // this.$systemService.CloseTipwizard();
                this.$systemService.OpenTipwizard(t, '000000')
            }
            console.log(to.path)
            // 根据路由隐藏返回按钮
            if(to.path == '/serviceCenter/wzjlzmkj/d'){
                // t.hideBackBtn()
            }
            // 根据条件隐藏返回按钮
            setTimeout(() => {
                if(document.querySelector('#print')){
                    // t.hideBackBtn()
                }
            }, 200);
        }
    },
    mounted(){
        const t = this;
        window.$router = t.$router;
        window.vue = t;
        let thisInte = setInterval(()=>{
            if(window.config){
                clearInterval(thisInte);
                t.sysName = window.config.filter((v)=>{
                    return v.id == 1
                })[0].settingValue;
            }
        }, 100)
        if(t.$route.path != '/'){
            this.showBtn = true
        }
        window.closeSys = t.closeSys();
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
