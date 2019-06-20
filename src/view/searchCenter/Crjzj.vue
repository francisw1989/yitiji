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
                            <el-input v-model="form.gmsfhm" placeholder="请输入身份证号"></el-input>
                        </el-form-item>
                        <el-form-item label="出入境号：" prop="cardNo" class="left" style="width: 50%">
                            <el-input v-model="form.cardNo" placeholder="请输入出入境号"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
                <div class="center top60">
                    <span class="btns btns-big btns-blue" @click="onSubmit('form')">查询</span>
                </div>
                <div class="top60">
                    <p class="colblue font24" style="padding-bottom: 15px; border-bottom: 1px solid #1755B1">查询结果</p>
                </div>
                <div class="top25" v-if="info.zwxm">
                    <table class="m-table3">
                        <tr>
                            <td class="td">姓名</td>
                            <td>{{info.zwxm}}</td>
                            <td class="td">证件类型</td>
                            <td>{{info.zjzl}}</td>
                        </tr>
                        <tr>
                            <td class="td">出入境号</td>
                            <td>{{info.zjhm}}</td>
                            <td class="td">有效期</td>
                            <td>{{info.qfrq}} - {{info.yxqz}}</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
        

        
    </div>
</template>

<script>

export default {
    name: "Crjzj",
    data() {
        return {
            info:{},
            form: {
                gmsfhm: '',
                cardNo: 'G44784368'
            },
            rules: {
                gmsfhm: [
                    {required: true, message: '请填写身份证' }
                ],
                cardNo: [
                    {required: true, message: '请填写出入境号' }
                ]
            },
        }
	},
    components: {
        
    },
    methods: {
        sub(){
            const t = this;
            let params = {
                gmsfhm: t.form.gmsfhm,
                cardNo: t.form.cardNo
            };
            t.$javaService.crjzjcx(t, params).then((res)=>{
                t.info = res;
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
