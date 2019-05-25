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
        emit.$on("finishFace",(res)=>{
			if(res.finishFace){
                let params = {};
				t.$javaService.wfzjlzm(t, params).then(()=>{
                
                })
			}
		});
    }
}
</script>

<style>
@import "../../../style.css";
</style>
