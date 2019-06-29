<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{wsxTitle}}<span id="secondTitle"></span></span>
        </div>
        <div class="boxWapAll2 clearfix top25">
            <div class="center" style="margin-top: 150px">
                <p class="font24b colblue">系统维护中……</p>
                <img src="../../assets/img24.png" class="top40" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Whz",
    data() {
        return {
            wsxTitle: ''
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
    }
}
</script>

<style>
@import "../../style.css";
</style>
