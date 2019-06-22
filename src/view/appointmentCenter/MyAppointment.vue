<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="pad30">
                <el-table
                    :data="tableData"
                    border
                    header-row-class-name="tableHeader2"
                    row-class-name="tableTr"
                    align="center"
                    style="width: 100%">
                    <el-table-column
                    prop="typeName"
                    label="预约业务"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="预约地址"
                    width="">
                    </el-table-column>
                    <el-table-column
                    prop="time"
                    width="200"
                    label="预约时间">
                    </el-table-column>
                    <el-table-column
                    prop="a"
                    width="150"
                    label="取消预约">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status == 0" class="icoAll ico9" @click="cancelOrder(scope.row)"></span>
                        <span v-else class="icoAll ico9 cancel">已取消</span>
                    </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
    
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "Zhyy",
    data() {
        return {
            tableData: [{
                a: 'wer 1518 弄'
            }, {
                a: 'ewr 1518 弄'
            }],
        }
	},
    components: {
        
    },
    methods: {
        searchOrder(){
            const t = this;
            let info;
            if(localStorage.IDCardBase64){
                info = JSON.parse(localStorage.IDCardBase64)
            }else{
                info = window.IDCardBase64
            }
            let params = {
                cardid: info.sIDNo
            }
            t.$javaService.searchOrder(t, params).then((res)=>{
                t.tableData = res;
            })
        },
        cancelOrder(row){
            const t = this;
            let info;
            if(localStorage.IDCardBase64){
                info = JSON.parse(localStorage.IDCardBase64)
            }else{
                info = window.IDCardBase64
            }
            let params = {
                cardid: info.sIDNo,
                departmentId: row.departmentId,
                number: row.number
            }
            t.$javaService.cancelOrder(t, params).then((res)=>{
                t.searchOrder();
            })
        }
    },
    

    mounted(){
        const t = this;
        t.searchOrder();
    }
}
</script>

<style>
@import "../../style.css";
</style>
