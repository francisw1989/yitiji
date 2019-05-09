<template>
    <div class="boxWapAll2 top25">
        <div class="pad30">
            <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="160px">
                <el-form-item label="选择车型："  prop="a">
                    <el-input v-model="form.a" @focus="focus" placeholder="请选择车型"></el-input>
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
            <div class="center top30">
                <span class="btns btns-big btns-blue" @click="onSubmit('form')">查询</span>
            </div>
        </div>
        <el-dialog :visible.sync="visible" :show-close="false">
            dgdgf
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: "JtwfclA",
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
                    {required: true, message: '请输入', trigger: 'blur' }
                ]
            },
            visible: true
        }
	},
    components: {
        
    },
    methods: {
        focus(){
            console.log('3423')
        }
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../../style.css";
.el-form-item__label{ color: #1755B1}
.speInputWap input{padding-left: 115px}
</style>
