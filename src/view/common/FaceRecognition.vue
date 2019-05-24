<template>
    <div class="display: inline-block">
        <div class="faceWap clearfix">
            <div class="cont relative">
                <div class="m"></div>
            </div>
            <p class="center top40 p">识别中……</p>
        </div>
        <p class="colblue font24b top40 center">请将头像置于识别框中</p>
    </div>
</template>

<script>
export default {
    name: "FaceRecognition",
    data() {
        return {
        };
    },
    components: {

    },
    methods: {
        htjc(){
            const t = this;
            let _do = ()=>{
                try{
                    t.$systemService.OpenHtjc().then(()=>{
                        t.$systemService.ManualCatch().then((res)=>{
                            document.querySelector('.faceWap .cont').style.backgroundImage = 'url(data:image/png;base64,' + res + ')';
                            console.log(document.querySelector('.faceWap .cont').style.backgroundImage)
                            let params = JSON.parse(localStorage.form)
                            params.data = res;
                            t.$javaService.lssfzm(t, params)
                            // t.$systemService.StopVedio()
                        },()=>{
                            console.log('抓拍失败，重新检测')
                            _do();
                        })
                    })
                }catch(err){
                    t.$alert(err,'',{
                        showClose: false
                    });
                }
            }
            t.$systemService.OpenLiveDetect(t).then((res)=>{
                t.$systemService.StartVedio().then(()=>{
                    setTimeout(()=>{
                        _do();
                    },2000)
                })
            })            
        }    
    },
    
    mounted(){
        const t = this;
        let params = JSON.parse(localStorage.form)
        params.data = '33243243242432';
        t.$javaService.lssfzm(t, params)
        t.htjc();
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
