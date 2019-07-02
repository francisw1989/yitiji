<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div style="padding: 50px 60px">
                <el-form label-position="left" :model="form" ref="form" :rules="rules" label-width="140px">
                    <el-form-item label="身份证号：" prop="gmsfhm">
                        <el-input v-model="form.gmsfhm" placeholder="请输入身份证" @focus="inputFocus($event, 3)"></el-input>
                    </el-form-item>
                </el-form>
                <div class="center" style="margin-top: 70px">
                    <span class="btns btns-big btns-blue" @click="onSubmit('form')">查询</span>
                </div>
                <div class="top60">
                    <p class="colblue font24" style="padding-bottom: 15px; border-bottom: 1px solid #1755B1">查询结果</p>
                </div>
                <div class="top25" v-for="(v, i) in list" :key="i">
                    <table class="m-table3">
                        <tr>
                            <td class="td">身份证号</td>
                            <td>{{v.gmSfhm}}</td>
                        </tr>
                        <tr>
                            <td class="td">办理状态</td>
                            <td>{{v.xtbsMc}}</td>
                        </tr>
                        <tr>
                            <td class="td">时间</td>
                            <td>{{v.slrq}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "Sfz",
    data() {
        return {
            list:{},
            form: {
                gmsfhm: ''
            },
            rules: {
                gmsfhm: [
                    {validator: window.cardVa, required: true }
                ]
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
                gmsfhm: t.form.gmsfhm
            };
            t.$javaService.sfzbljdcx(t, params).then((res)=>{
                t.list = res
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
        t.initIdCard()
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
