<template>
    <div class="boxWapAll2 top25">

        <div class="center" style="padding: 60px 80px">
            <FaceRecognition></FaceRecognition>
        </div>
        
    </div>
</template>

<script>
import emit from '../../emit.js';
import FaceRecognition from 'FaceRecognition';
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

    }
}
</script>

<style>
@import "../style.css";
</style>
