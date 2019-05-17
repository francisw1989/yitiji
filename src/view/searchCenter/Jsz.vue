<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="pad30">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="160px">
                    <div class="clearfix">
                        <el-form-item label="身份证号：" class="left relative" style="width: 50%">
                            <el-input v-model="form.d" placeholder="请输入"></el-input>
                        </el-form-item>
                        <el-form-item label="档案编号：" class="left" style="width: 50%">
                            <el-input v-model="form.e" placeholder="请输入"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
                <div class="center top60">
                    <span class="btns btns-big btns-blue">查询</span>
                </div>
                <div class="top60">
                    <p class="colblue font24" style="padding-bottom: 15px; border-bottom: 1px solid #1755B1">查询结果</p>
                </div>
                <div class="top25">
                    <table class="m-table3">
                        <tr>
                            <td class="td">姓名</td>
                            <td>张三</td>
                            <td class="td">驾驶证号</td>
                            <td>21321233</td>
                        </tr>
                        <tr>
                            <td class="td">档案编号</td>
                            <td>213123132</td>
                            <td class="td">准驾车型</td>
                            <td>C1 </td>
                        </tr>
                        <tr>
                            <td class="td">积分</td>
                            <td>0 分</td>
                            <td class="td">准假期限</td>
                            <td>2019-04-15至2026-04-14</td>
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
    name: "Jsz",
    data() {
        return {
            form: {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
            },
            rules: {
                a: [
                    {required: true, message: '请选择车型' }
                ]
            },
            visible: false,
            cxList: [
                {name: '大型汽车', class: 'active'},
                {name: '小型汽车'},
                {name: '使馆汽车'},
                
                {name: '境外汽车'},
                {name: '境外汽车'},
                {name: '轻便摩托车'},
                {name: '轻便摩托车'},
            ]
        }
	},
    components: {
        
    },
    methods: {
        focus(){
            const t = this;
            t.visible = true;
        },
        selCx(e){
            const t = this;
            t.visible = false;
            t.form.a = e;
        },
        onSubmit(formName){
            const t = this;
            t.$refs[formName].validate((valid) => {
                if (valid) {
                    t.$router.push('/serviceCenter/jtwfcl/b')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
        }
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
