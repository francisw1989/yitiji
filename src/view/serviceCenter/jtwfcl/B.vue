<template>
    <div class="boxWapAll2 top25">
        <div class="pad30">
            <el-table
                :data="tableData"
                border
                header-row-class-name="tableHeader"
                row-class-name="tableTr"
                align="center"
                style="width: 100%">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="date"
                label="违法时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="违法地点"
                width="180">
                </el-table-column>
                <el-table-column
                prop="address"
                label="违法行为">
                </el-table-column>
                <el-table-column
                prop="address"
                label="金额">
                </el-table-column>
                <el-table-column
                prop="address"
                label="扣分">
                </el-table-column>
            </el-table>
            <div class="center" style="margin-top: 100px">
                <span class="btns btns-big btns-blue" @click="jiaofei">缴费</span>
            </div>
        </div>
        <el-dialog width="65%" title="交通违法缴费" top="0" custom-class="modal" left :visible.sync="visible">
            <div>
                <p class="font20 colblue top15">提示：本次缴费仅限车主本人实名认证的支付宝账户。</p>
            </div>
            <div class="center top20 clearfix" style="padding-bottom: 50px">
                <div class="ewmWap" style="margin-top:60px;">
                    <img src="../../../assets/img11.png" alt="">
                </div>
                <p class="font24 top30">请扫描二维码，进行缴费处理！</p>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: "JtwfclB",
    data() {
        return {
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            visible: false
            
        }
	},
    components: {
        
    },
    methods: {
        jiaofei(){
            const t = this;
            t.visible = true
        }
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
