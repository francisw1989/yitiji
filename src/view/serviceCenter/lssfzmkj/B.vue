<template>
    <div class="boxWapAll2 top25">

        <div class="center" style="padding: 60px 80px 0 80px">
            <FaceRecognition></FaceRecognition>
        </div>
        
    </div>
</template>

<script>
import emit from '../../../emit.js';
import FaceRecognition from '../../common/FaceRecognition';
export default {
    name: "LssfzmkjB",
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
        emit.$once("finishFace",(res)=>{
			if(res.finishFace){
                document.querySelector('.faceWap .cont').style.backgroundImage = 'url(data:image/png;base64,' + localStorage.faceBase64 + ')';
                let params = JSON.parse(localStorage.form)
                t.$javaService.lssfzm(t, params, localStorage.faceBase64).then((res)=>{
                    localStorage.PDFBase64 = res;
                    // return
                    t.$router.push('/serviceCenter/lssfzmkj/c')
                },(res)=>{
                    
                })
			}
		});
    }
}
</script>

<style>
@import "../../../style.css";
</style>
