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
            let info = localStorage.IDCardBase64 ? JSON.parse(localStorage.IDCardBase64) : window.IDCardBase64;
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
                    localStorage.pageFrom = 'faceWap';
                    t.$router.push(localStorage.beforePath || '')
                }
            },(res)=>{
                
            })
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
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
