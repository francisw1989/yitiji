<template>
    <div class="boxWapAll2 top25">
        <div class="pad30">
            <el-table
                :data="tableData"
                @selection-change="handleSelectionChange"
                border
                header-row-class-name="tableHeader"
                row-class-name="tableTr"
                align="center"
                style="width: 100%">
                <el-table-column
                type="selection"
                width="55" :selectable="selectable">
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
            tableData: [{"hpzl":"02","hphm":"豫A760RY","clsbdh":"LBV8W3105JMM68637","csys":"白","jdcsyr":"钟文","clpp":"宝马牌","dsr":null,"dh":null,"lxfs":null,"wfbh":null,"jdsbh":null,"jdslb":null,"wfsj":"2018-10-02+08:23:00.0","wfdd":"71507","wfdz":"玉凤路","wfxw":"1039","fkje":null,"zsxzqh":"410100","zsxxdz":"郑州市金水区鑫苑路18号8号楼一单元3层","tzbj":"1","tzrq":"2018-10-02+00:00:00.0","clsj":null,"clbj":"0","jkfs":null,"jkbj":"0","jkrq":null,"xh":"4101040002229299","wfxwBean":{"createTime":"2019-06-14 00:28","createBy":null,"id":657,"code":"1039","wfms":"不按规定停车","wfjfs":0,"fkje":200}},{"hpzl":"02","hphm":"豫A760RY","clsbdh":"LBV8W3105JMM68637","csys":"白","jdcsyr":"钟文","clpp":"宝马牌","dsr":null,"dh":null,"lxfs":null,"wfbh":null,"jdsbh":null,"jdslb":null,"wfsj":"2019-05-27+09:59:40.0","wfdd":"66002","wfdz":"黄河路武园街路口","wfxw":"1039","fkje":null,"zsxzqh":"410100","zsxxdz":"郑州市金水区鑫苑路18号8号楼一单元3层","tzbj":"0","tzrq":null,"clsj":null,"clbj":"0","jkfs":null,"jkbj":"0","jkrq":null,"xh":"4108250001010964","wfxwBean":{"createTime":"2019-06-14 00:28","createBy":null,"id":657,"code":"1039","wfms":"不按规定停车","wfjfs":0,"fkje":200}}],
            visible: false,
            codes:'',
            multipleSelection: []
        }
	},
    components: {
        
    },
    methods: {
        selectable(row, index){
            if(row.wfxwBean.wfjfs){
                return false
            }else{
                return true
            }
        },
        handleSelectionChange(val) {
            console.log(val)
            this.multipleSelection = val;
        },
        jiaofei(){
            const t = this;
            if(t.multipleSelection.length>0){
                let params = window.form;
                params.xh = t.multipleSelection.map((v, i)=>{
                    return v.xh
                }).join('$');
                t.$javaService.jtwzjf(t, params).then((res)=>{
                    // t.tableData = res
                    t.url = res;
                    t.visible = true;
                    setTimeout(()=>{
                        t.qrcode();
                    },500)
                })
            }else{
                t.$alert('请至少选择一项','',{
                    showClose: false
                })
            }

            
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
        })
        
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
