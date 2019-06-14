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
                prop="wfxwBean.createTime"
                label="违法时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="wfdz"
                label="违法地点"
                width="180">
                </el-table-column>
                <el-table-column
                prop="wfxwBean.wfms"
                label="违法行为">
                </el-table-column>
                <el-table-column
                prop="wfxwBean.fkje"
                label="金额">
                </el-table-column>
                <el-table-column
                prop="wfxwBean.wfjfs"
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
                <div class="ewmWap" id="qrcode" style="margin-top:60px;">
                </div>
                <p class="font24 top30">请扫描二维码，进行缴费处理！</p>
            </div>
        </el-dialog>
        
    </div>
</template>

<script>
import QRCode from 'qrcodejs2' 
export default {
    name: "JtwfclB",
    data() {
        return {
            tableData: [],
            visible: false,
            codes:''
            
        }
	},
    components: {
        
    },
    methods: {
        jiaofei(){
            const t = this;
            t.visible = true;
            setTimeout(()=>{
                t.qrcode();
            },500)
        },
        qrcode() {
            const t = this;
            document.querySelector('#qrcode').innerHTML = '';
            let qrcode = new QRCode('qrcode', {
                width: 272,  
                height: 272,
                text: t.url, // 二维码地址
                colorDark : "#000",
                colorLight : "#fff",
            })


        },
    
    },
    mounted(){
        const t = this;
        let params = window.form;
        
        t.$javaService.jtwzcx(t, params).then((res)=>{
            t.tableData = res;
            t.$javaService.jtwzjf(t, params).then((res)=>{
                // t.tableData = res
                t.url = res;
            })
        })
        
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
