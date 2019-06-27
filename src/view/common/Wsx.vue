<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{wsxTitle}}<span id="secondTitle"></span></span>
        </div>
        <div class="boxWapAll2 clearfix top25">
            <div class="center" style="margin-top: 150px">
                <p class="font24b colblue">近期上线，敬请期待……</p>
                <img src="../../assets/img22.png" class="top40" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Wsx",
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
