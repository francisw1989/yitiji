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
            debugger
			if(res.finishFace){
                document.querySelector('.faceWap').style.backgroundImage = 'url(data:image/png;base64,' + localStorage.facsBase64 + ')';
                let params = JSON.parse(localStorage.form)
                params.data = localStorage.facsBase64;
				t.$javaService.lssfzm(t, params)
			}
		});
    }
}
</script>

<style>
@import "../../../style.css";
</style>
