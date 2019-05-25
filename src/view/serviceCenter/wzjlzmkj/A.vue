<template>
    <div class="boxWapAll2 top25">
        <div class="center" style="padding: 60px 80px">
            <ID></ID>
        </div>
    </div>
</template>

<script>
import ID from '../../common/ID.vue';
import emit from '../../../emit.js';
export default {
    name: "WzjlzmkjA",
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
        emit.$on("finishID",(res)=>{
			if(res.finishID){
				this.$router.push('/serviceCenter/wzjlzmkj/b');
			}
		});
    }
}
</script>

<style>
@import "../../../style.css";
</style>
