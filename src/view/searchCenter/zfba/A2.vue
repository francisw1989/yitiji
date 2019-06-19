<template>
    <div class="boxWapAll2 top25 clearfix relative">
        <div v-if="step == 1" style="margin-top: 200px;" class="center">
            <div @click="choose($event, index)" class="yyBox clearfix" v-for='(item, index) in m' :key="index">
                <div class="a1 top60 clearfix">
                    <div class="a2 top10 clearfix">
                        <i :class="'icoAll top35 ' + item.ico "></i>
                    </div>
                </div>
                <p class="center font24b top30 colblue">{{item.title}}</p>
            </div>
            
        </div>
        <div v-if="step == 2 && chooseIndex == 1" style="padding: 60px 70px;">
            <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="125px">
                <el-form-item label="身份证号：" prop="cardNo">
                    <el-input v-model="form.cardNo" @focus="inputFocus($event, 3)"></el-input>
                </el-form-item>
            </el-form>
            <div class="center top30">
                <span class="btns btns-big btns-blue" @click="onSubmit('form')">立即查询</span>
            </div>
        </div>
        <div v-if="(step == 2 && chooseIndex == 0) || (step == 3 && chooseIndex == 1)">
            <el-table
                :data="tableData"
                border
                header-row-class-name="tableHeader"
                row-class-name="tableTr"
                align="center"
                style="width: 100%">
                <el-table-column
                prop="xuhao"
                label="序号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="ajbh"
                label="案件编码"
                width="500">
                </el-table-column>
                <el-table-column
                prop="ajdl"
                label="案件类型">
                </el-table-column>
                <el-table-column
                label="查看详情"
                width="250">
                    <template slot-scope="scope">
                    <span class="btns btns-small btns-blue" @click="showDetail(scope.row)">查看</span>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div v-if="(step == 3 && chooseIndex == 0) || (step == 4 && chooseIndex == 1)">
            <div class="jleftArea">
                <span :class="'span ' + v.class" @click="zfgkChoose($event, i)" v-for='(v, i) in b' :key="i">
                    <span class="left10">{{v.title}}</span>
                </span>
            </div>
            <div class="jrightArea clearfix">
                <div v-if="zfgkIndex == 0" class="font22 col333 clearfix">
                    <p class="bor_btm_so bold top60" style="padding-bottom: 15px">基本案情</p>
                    <p class="top20">案件编号：{{zfgkDetail.ajbh}}</p>
                    <p class="top20">涉嫌罪名：{{zfgkDetail.ajlb}}</p>
                </div>
                <div v-if="zfgkIndex == 1" class="font22 col333 clearfix">
                    <p class="bor_btm_so bold top60" style="padding-bottom: 15px">办案环节：{{zfgkDetail.ajzt}}</p>
                    <p class="top20">决定时间：{{zfgkDetail.larq}}</p>
                    <p class="top20">办案单位：{{zfgkDetail.bldw}}</p>
                    <p class="top20">办案民警：{{zfgkDetail.zbr}}</p>
                    <p class="top20">联系方式：{{zfgkDetail.bary_lxdh}}</p>
                </div>
                <div v-if="zfgkIndex == 2" class="font22 col333 clearfix">
                    <div v-for='(v, i) in zfgkDetail.xsqzcsinfo' :key="i">
                        <p class="bor_btm_so bold top60" style="padding-bottom: 15px">强制措施：{{v.jdjg}}</p>
                        <p class="top20">执行措施：{{v.jdjg}}</p>
                        <p class="top20">执行对象：{{v.xm}}</p>
                        <!-- <p class="top20">执行场所：{{v.zbr}}</p> -->
                        <p class="top20">执行时间：{{v.kssj}}</p>
                    </div>
                </div>
                <div v-if="zfgkIndex == 3" class="font22 col333 clearfix">
                    <div v-for='(v, i) in zfgkDetail.xssczinfo' :key="i">
                        <p class="bor_btm_so bold top60" style="padding-bottom: 15px">侦查措施：搜查</p>
                        <p class="top20">搜查时间：{{v.pzrq}}</p>
                        <p class="top20">搜查对象：{{v.fzxyrxm}}</p>
                    </div>
                </div>
                <div v-if="zfgkIndex == 4" class="font22 col333 clearfix">
                    <p class="bor_btm_so bold top60" style="padding-bottom: 15px">文书展示</p>
                    <div class="top30">
                        <div class="pdfBox clearfix" @click="showPdf(v)" v-for='(v, i) in zfgkDetail.flwsinfo' :key="i">
                            <p style="margin-top: 120px" class="center font16">{{v.flwsmc}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="prev" :class="disabled" id="btnPrev" style="display: none">上一步</div>
        <el-dialog title="温馨提示" top="0" custom-class="modal" center :visible.sync="visible" :show-close="false">
            <div style="width: 650px" class="font20 pad30">
                <p>抱歉，没有查询到您需要的信息，如需进一步查询，请到办案单位咨询！</p>
                <p class="top50">温馨提示：<br/><br/>警务地图具有郑州市公安机关各单位地址信息，是否现在查看警务地图？</p>
                <div class="center top50">
                    <span class="btns btns-big btns-grey" @click="no">否</span>
                    <span class="btns btns-big btns-blue left35" @click="yes">是</span>
                </div>
            </div>
            
        </el-dialog>
        <el-dialog :title="wsObj.flwsmc" top="0" custom-class="modal" left :visible.sync="wsvisible" >
            <div style="max-height: 580px; overflow: auto" class="font20 pad30">
                <!-- <PDF></PDF> -->
                <div v-html="wsnrbase64HTML" style="padding-right:2.8cm"></div>
                
            </div>
            
        </el-dialog>
    </div>
</template>

<script>
import PDF from '../../common/PDF.vue';
export default {
    name: "ZfbaA1",
    data() {
        let cardVa = (rule, value, callback)=>{
            let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
            if (value == '') {
                callback(new Error('请输入身份证号'));
            } else if (reg.test(value) === false) {
                callback(new Error('身份证输入不合法!'));
            } else {
                callback();
            }
        }
        return {
            wsnrbase64HTML: '',
            wsObj: {},
            wsvisible: false,
            zfgkDetail: {},
            zfgkIndex: 0,
            b: [
                {title: '基本案情'},
                {title: '办案环节'},
                {title: '强制措施'},
                {title: '侦查措施'},
                {title: '文书展示'},
            ],
            visible: false,
            tableData: [],
            disabled: 'disabled',
            chooseIndex: 0,
            step: 1,
            //测试数据： 411002198910050514 亲属：411002199210061022
            form: {
                cardNo: '411002199210061022'
            },
            rules: {
                cardNo: [
                    {validator: cardVa, trigger: 'blur' }
                ]
            },
            m:[
                {ico: 'ico15', title: '查询个人'},
                {ico: 'ico16', title: '查询亲属'}
            ]
        }
	},
    components: {
        PDF
    },
    methods: {
        showPdf(res){
            const t = this;
            t.wsObj = res;
            t.wsvisible = true;
            t.wsnrbase64HTML = window.Base64.decode(t.wsObj.wsnrbase64)
        },
        zfgkChoose(e, i){
            const t = this;
            t.zfgkIndex = i;
            t.b.forEach((v, i)=>{
                v.class = ''
            })
            t.b[i].class = 'active';
            t.b = JSON.parse(JSON.stringify(t.b))
        },
        showDetail(res){
            const t = this;
            t.zfgkDetail = res;
            t.next();
            t.zfgkChoose('', 0)
        },
        no(){
            const t = this;
            t.visible = false
        },
        yes(){
            const t = this;
            t.visible = false;
            t.$router.push('/searchCenter/jwdt');
        },
        inputFocus(e, type){
            const t = this;
            t.$systemService.inputFocus(e, type)
        },
        next(){
            const t = this;
            t.step = t.step + 1;
            t.disabled = '';
        },
        prev(){
            const t = this;
            t.disabled = '';
            if(t.step == 2){
                t.disabled = 'disabled';
            }
            if(t.step == 1){
                return;
                
            }
            t.step = t.step - 1;
        },
        choose(e, index){
            const t = this;
            t.chooseIndex = index;
            if(t.chooseIndex ==0){
                t.sub();
            }else{
                t.next()
            }
            
        },
        sub(){
            const t = this;
            let info;
            if(localStorage.IDCardBase64){
                info = JSON.parse(localStorage.IDCardBase64)
            }else{
                info = window.IDCardBase64
            }
            let params = {
                gmsfhm: info.sIDNo
            };
            if(t.chooseIndex == 1){
                params.fgmsfhm = t.form.cardNo
            }
            t.$javaService.zfbagk(t, params).then((res)=>{
                if(res.length){
                    t.next();
                    res[0].ajinfo.forEach((v, i) => {
                        v.xuhao = i + 1
                    });
                    t.tableData = res[0].ajinfo
                }else{
                    t.visible = true;
                }
                
            },(res)=>{
                
            })
        },
        onSubmit(formName){
            const t = this;
            t.$refs[formName].validate((valid) => {
                if (valid) {
                    t.sub()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
