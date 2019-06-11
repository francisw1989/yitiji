<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="center" style="padding: 60px 80px">
                <ID></ID>
            </div>
        </div>
    </div>
    
</template>

<script>
import ID from './ID.vue';
import emit from '../../emit.js';
export default {
    name: "IDWap",
    data() {
        return {
        }
	},
    components: {
        ID
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
