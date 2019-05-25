<template>
    <div class="header clearfix">
        <div class="maxWidth clearfix">
            <div class="right top30 right70" v-if="showBtn">
                <span class="icoAll btnIndex" @click="backToIndex"></span>
                <span class="icoAll btnBack left25" @click="back"></span>
            </div>
            <img src="../../assets/logo.png" class="logo" alt>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            showBtn: false,
            fromPath: '/'
        };
    },
    components: {

    },
    methods: {
        backToIndex(){
            this.$router.push('/')
        },
        back(){
            const t = this;
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/');
            t.$systemService.CloseKeyBoard(t)
        }
    },
    watch:{
        $route(to,from){
            if(to.path != '/'){
                this.showBtn = true;
            }else{
                this.showBtn = false;
            }
        }
    },
    mounted(){
        const t = this;
        if(t.$route.path != '/'){
            this.showBtn = true
        }
    }
}
</script>

<style>
@import "../../style.css";
</style>
