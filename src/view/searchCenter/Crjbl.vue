<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="pad30">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="160px">
                    <div class="clearfix">
                        <el-form-item label="身份证号：" prop="gmsfhm" class="left relative" style="width: 50%">
                            <el-input v-model="form.gmsfhm" @focus="inputFocus($event, 3)" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item label="受理编号：" @focus="inputFocus($event, 3)" prop="cardNo" class="left" style="width: 50%">
                            <el-input v-model="form.cardNo" placeholder="请输入"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
                <div class="center top60">
                    <span class="btns btns-big btns-blue" @click="onSubmit('form')">查询</span>
                </div>
                <div class="top60">
                    <p class="colblue font24" style="padding-bottom: 15px; border-bottom: 1px solid #1755B1">查询结果</p>
                </div>
                <div class="top25" v-for="(v, i) in list" :key="i">
                    <table class="m-table3">
                        <tr>
                            <td class="td">业务编号</td>
                            <td>{{v.ywbh}}</td>
                            <td class="td">身份证号</td>
                            <td>{{v.sfzh}}</td>
                        </tr>
                        <tr>
                            <td class="td">办理进度</td>
                            <td>{{v.bljd}}</td>
                            <td class="td">受理日期</td>
                            <td>{{v.slrq}} </td>
                        </tr>
                        <tr>
                            <td class="td">办理状态</td>
                            <td colspan="3">{{v.blzt}}</td>
                            
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        <el-dialog title="车型" top="0" custom-class="modal" center :visible.sync="visible" :show-close="false">
            <div class="jgWap">
                <span @click="selCx(v.name)" :class="'btns ' + v.class " v-for="(v, i) in cxList" :key="i">{{v.name}}</span>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey">取消</span>
                <span class="btns btns-big btns-blue left35">确定</span>
            </div>
        </el-dialog>
        
    </div>
</template>

<script>

export default {
    name: "Crjbl",
    data() {
        return {
            list:{},

            form: {
                gmsfhm: '',
                cardNo: ''
            },
            rules: {
                gmsfhm: [
                    {validator: window.cardVa, required: true }
                ],
                // cardNo: [
                //     {required: true, message: '请填写出入境号' }
                // ]
            },
        }
	},
    components: {
        
    },
    methods: {
        inputFocus(e, type){
            const t = this;
            t.$systemService.inputFocus(e, type)
            
        },
        sub(){
            const t = this;
            let params = {
                no: t.form.cardNo || t.form.gmsfhm ,
            };
            if(!params.no){
                t.$alert('请输入身份证号或受理编号','',{
                    showClose: false
                })
                return
            }
            t.$javaService.crjbljdcx(t, params).then((res)=>{
                t.list = res;
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
        initIdCard(){
            const t = this;
            let info;
            if(localStorage.IDCardBase64){
                info = JSON.parse(localStorage.IDCardBase64)
            }else{
                info = window.IDCardBase64
            }
            t.form.gmsfhm = info.sIDNo;
        },
    },
    mounted(){
        const t = this;
        t.initIdCard();
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
