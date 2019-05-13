<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="center" style="padding: 80px 0" v-if="step==1">
                <ID></ID>
            </div>
            <div v-if="step==2" class="pad30">
                <el-table
                    :data="tableData"
                    border
                    header-row-class-name="tableHeader2"
                    row-class-name="tableTr"
                    align="center"
                    style="width: 100%">
                    <el-table-column
                    prop="a"
                    label="预约业务"
                    width="">
                    </el-table-column>
                    <el-table-column
                    prop="b"
                    label="预约地址"
                    width="">
                    </el-table-column>
                    <el-table-column
                    prop="a"
                    label="预约时间">
                    </el-table-column>
                    <el-table-column
                    prop="a"
                    label="取消预约">
                    <template slot-scope="scope">
                        <span class="icoAll ico9" @click="handleClick(scope.row)"></span>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
    
</template>

<script>
import ID from '../common/ID.vue';
import emit from '../../emit.js';
export default {
    name: "Zhyy",
    data() {
        return {
            step: '1',
            tableData: [{
                a: 'wer 1518 弄'
            }, {
                a: 'ewr 1518 弄'
            }],
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
			t.step = 2;
		});
    }
}
</script>

<style>
@import "../../style.css";
</style>
