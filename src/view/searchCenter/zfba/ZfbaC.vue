<template>
    <div class="boxWapAll2 top25" style="overflow: hidden;">
        <iframe :src="url" style="width: 100%; height: 100%;" frameborder="0"></iframe>
    </div>
</template>

<script>

export default {
    name: "ZfbaC",
    data() {
        return {
            url: ''
        }
	},
    components: {
        
    },
    methods: {
        
    },
    mounted(){
        const t = this;
        t.url = t.$route.query.url;
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
