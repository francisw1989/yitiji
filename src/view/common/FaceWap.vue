<template>
    
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">

            <div class="center" style="padding: 60px 80px">
                <FaceRecognition></FaceRecognition>
            </div>
            
        </div>
    </div>
</template>

<script>
import emit from '../../emit.js';
import FaceRecognition from './FaceRecognition';
export default {
    name: "FaceWap",
    data() {
        return {
            
        }
	},
    components: {
        FaceRecognition
    },
    watch:{
        
    },
    methods: {
        sub(){
            const t = this;
            let info;
            if(localStorage.IDCardBase64){
                info = JSON.parse(localStorage.IDCardBase64)
            }else{
                info = window.IDCardBase64
            }
            let params = {
                address: info.sAddress,
                birthDate: info.sBornDate,
                cameraImg: localStorage.faceBase64 || window.faceBase64,
                cardImg: info.sPhotoBuffer,
                cardNo: info.sIDNo,
                endTime: info.sEndDate,
                nation: info.sNation,
                organization: info.sSignGov,
                sex: info.sSex=='男'?'1':'0',
                startTime: info.sStartDate,
                userName: info.sName,       
            };
            t.$javaService.sfsb(t, params).then((res)=>{
                console.log(res);
                if(res){
                    t.goToAction();
                }
            },(res)=>{
                
            })
        },
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
        // t.sub();
        // return;
        emit.$once("finishFace",(res)=>{
			if(res.finishFace){
                t.sub()
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
