<template>
    <div class="boxWapAll2 top25 center" style="padding: 50px 70px;">
        <ID></ID>
        <el-dialog width="65%" title="信 息 提 示" top="0" custom-class="modal" center :visible.sync="visible" :show-close="false">
            <div class="pad40 font20">
                <p><i class="icoAll ico13 right10"></i><span class="verMid">抱歉，没有查询到您需要的信息，如需进一步查询，请到办案单位咨询！</span> </p>
                <div class="top20" style="margin-left: 45px">温馨提示：<br/>警务地图具有郑州市公安机关各单位地址信息，是否现在查看警务地图？</div>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey">否</span>
                <span class="btns btns-big btns-blue left35">是</span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import ID from '../../common/ID.vue';
import emit from '../../../emit.js';
export default {
    name: "ZfbaA2",
    data() {
        return {
            visible: false
        }
	},
    components: {
        ID
    },
    methods: {

    },
    mounted(){
        const t = this;
        emit.$on("goToNext",(res)=>{
			t.visible = true
		});
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
