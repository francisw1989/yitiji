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
        emit.$on("finishFace",(res)=>{
			if(res.finishFace){
                document.querySelector('.faceWap').style.backgroundImage = 'url(data:image/png;base64,' + localStorage.facsBase64 + ')';
                let params = JSON.parse(localStorage.form)
                t.$javaService.lssfzm(t, params, localStorage.facsBase64).then((res)=>{
                    localStorage.faceBase64 = res;
                    t.$router.push('/serviceCenter/lssfzmkj/c')
                },(res)=>{
                    t.$alert(res,'',{
                        showClose: false
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
