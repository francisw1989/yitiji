<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="pad30">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="160px">
                    <el-form-item label="选择车型："  prop="a">
                        <el-input suffix-icon="el-icon-arrow-down" v-model="form.a" @focus="focus" placeholder="请选择车型"></el-input>
                    </el-form-item>
                    <div class="clearfix">
                        <el-form-item label="车牌号码：" class="left relative" style="width: 50%">
                            <el-input v-model="form.d" class="speInputWap" placeholder="输入车牌号"></el-input>
                            <div class="cphm">豫A</div>
                        </el-form-item>
                        <el-form-item label="车架号码：" class="left" style="width: 50%">
                            <el-input v-model="form.e" placeholder="输入车架号码后六位"></el-input>
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
                            <td class="td">车牌号码</td>
                            <td>豫A 11555 </td>
                            <td class="td">违法时间</td>
                            <td>2018-05-03 </td>
                        </tr>
                        <tr>
                            <td class="td">违法地点</td>
                            <td>玉凤路 </td>
                            <td class="td">违法行为</td>
                            <td>奋斗奋斗过覆盖 </td>
                        </tr>
                        <tr>
                            <td class="td">违法代码</td>
                            <td>1039</td>
                            <td class="td">处罚结果</td>
                            <td>扣 0 分  罚 200 元</td>
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
    name: "Jdc",
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
.speInputWap input{padding-left: 115px}
</style>
