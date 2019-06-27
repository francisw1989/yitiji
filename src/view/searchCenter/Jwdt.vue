<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25" style="overflow: hidden;">
            <iframe :src="src" style="width: 100%; height: 100%;" frameborder="0"></iframe>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "Jwdt",
    data() {
        return {
            src: '',
        }
	},
    components: {
        
    },
    methods: {
        
    },
    mounted(){
        const t = this;
        let code = t.$systemService.GetCode();
        t.src = 'http://app.huiyunit.com:18694/zzytj/?locationCode=' + code;
    }
}
</script>

<style>
@import "../../style.css";
</style>
