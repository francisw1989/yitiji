<template>
    <div class="display: inline-block">
        <div class="faceWap clearfix">
            <div class="cont relative">
                <!-- <div class="m"></div> -->
            </div>
            <p class="center top20 p">识别中……</p>
        </div>
        <p class="colblue font24b top40 center">请将头像置于识别框中</p>
    </div>
</template>

<script>
import emit from '../../emit.js';
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
                        // t.$systemService.ManualCatch().then((res)=>{
                        //     t.$systemService.StopVedio(t).then(()=>{
                        //         t.$systemService.CloseLiveDetect(t)
                        //     })
                        //     //document.querySelector('.faceWap .cont').style.backgroundImage = 'url(data:image/png;base64,' + res + ')';
                        //     console.log(document.querySelector('.faceWap .cont').style.backgroundImage)
                        //     let params = JSON.parse(localStorage.form)
                        //     params.data = res;
                        //     t.$javaService.lssfzm(t, params).then(()=>{
                                
                        //     })
                        //     // t.$systemService.StopVedio()
                        // })
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
        },
        ReceiveLiveDetectImage(str){
            const t = this;
            //双目摄像头返回状态 3 成功   -1 检测未通过   -2  打开摄像头失败
            console.log("返回的状态：" + str.status);
            //返回的照片信息（Base64 字符串）
            // console.log("照片数据：" + str.image)
            if(str.status==3){
                localStorage.faceBase64 = str.image;
                t.$systemService.StopVedio(t).then(()=>{
                    t.$systemService.CloseLiveDetect(t)
                })
                // 人脸识别完了 获取base64图像，告诉外面  可以进行下一步
                t.next();
            }else{
                t.$systemService.OpenHtjc()
            }


            
        },
        next(){
            debugger
            emit.$emit('finishFace',{
				finishFace: true
			})
        },
    },
    
    mounted(){
        const t = this;
        emit.$emit('hideBack',{
            hideBack: true
        })
        // setTimeout(()=>{
        //     t.next();
        // }, 2000)
        // return
        //let params = JSON.parse(localStorage.form)
        //params.data = '33243243242432';
        //t.$javaService.lssfzm(t, params)
        t.htjc();
        window.ReceiveLiveDetectImage = (str)=>{
            str = JSON.parse(str)
            t.ReceiveLiveDetectImage(str)
        }
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
