<template>
    <div class="boxWapAll2 top25">

        <div class="center" style="padding: 60px 80px">
            <FaceRecognition></FaceRecognition>
        </div>
    </div>
</template>

<script>
import emit from '../../../emit.js';

import FaceRecognition from '../../common/FaceRecognition';
export default {
    name: "WzjlzmkjC",
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
        debugger
        emit.$on("finishFace",(res)=>{
			if(res.finishFace){
                let info = JSON.parse(localStorage.IDCardBase64);
                let params = {
                    cardNo: info.sIDNo,
                    name: info.sName,
                    sex: info.sSex=='男'?'1':'0',
                    nation: info.sNation,
                    birthDate: info.sBornDate,
                    address: info.sAddress,
                    organization: info.sSignGov,
                    startTime: info.sStartDate,
                    endTime: info.sEndDate                 
                };
                let cardImgs = [info.sPhotoBuffer,localStorage.faceBase64]
				t.$javaService.wfzjlzm(t, params,cardImgs).then((res)=>{
                    debugger
                    localStorage.PDFBase64 = res;
                    t.$router.push('/serviceCenter/lssfzmkj/d')
                },(res)=>{
                    t.$alert('抱歉！本系统不能辨别您的需求，请到属地派出所申请办理','',{
                        showClose: false
                    }).then(()=>{
                        document.querySelector('.btnIndex').click()
                    });
                })
			}
		});
    }
}
</script>

<style>
@import "../../../style.css";
</style>
