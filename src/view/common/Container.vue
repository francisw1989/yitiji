<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}<span id="secondTitle"></span></span>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Container",
    data() {
        return {
            
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
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
