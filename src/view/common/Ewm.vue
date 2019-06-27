<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{wsxTitle}}<span id="secondTitle"></span></span>
        </div>
        <div class="boxWapAll2 clearfix top25">
            <div class="center">
                <img :src="src" class="top60" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ewm",
    data() {
        return {
            wsxTitle: '',
            src: ''
        }
	},
    components: {
        
    },
    watch:{
        
    },
    methods: {
       
    },
    mounted(){
        const t = this;
        t.wsxTitle = localStorage.wsxTitle;
        t.src = localStorage.beforePath;
    }
}
</script>

<style>
@import "../../style.css";
</style>
