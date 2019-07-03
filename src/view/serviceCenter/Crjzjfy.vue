<template>
    <div class="boxWapAll2 top25 center">
        <img :src="src" alt="" class="top60">        
    </div>
</template>

<script>

export default {
    name: "Crjzjfy",
    data() {
        return {
            src: ''
        }
	},
    components: {
        
    },
    methods: {
        
    },
    mounted(){
        const t = this;
        t.src = t.$route.query.url;
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
