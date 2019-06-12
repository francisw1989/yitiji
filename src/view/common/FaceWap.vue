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
        
    },
    mounted(){
        const t = this;
        emit.$on("finishFace",(res)=>{
			if(res.finishFace){
                let info = JSON.parse(localStorage.IDCardBase64);
                let params = {
                    address: info.sAddress,
                    birthDate: info.sBornDate,
                    cameraImg: localStorage.faceBase64,
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
                    debugger
                    localStorage.PDFBase64 = res;
                    t.$router.push(location.beforePath)
                },(res)=>{
                    
                })
			}
		});
    }
}
</script>

<style>
@import "../../style.css";
</style>
