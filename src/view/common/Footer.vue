<template>
    <div class="footer">技术支持：{{jszz}}</div>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            jszz: ''
        };
    },
    components: {

    },
    methods: {

    },
    mounted(){
        const t = this;
        let thisInte = setInterval(()=>{
            if(window.config){
                clearInterval(thisInte);
                t.jszz = window.config.filter((v)=>{
                    return v.id == 3
                })[0].settingValue
            }
        }, 100)
    }
}
</script>

<style>
@import "../../style.css";
</style>
