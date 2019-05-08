<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="pad30">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="125px">
                    <el-form-item label="类型：">
                        <span class="btns btns-small btns-cir-small btns-bor">投诉</span>
                    </el-form-item>
                    <el-form-item label="主题："  prop="a">
                        <el-input v-model="form.a"></el-input>
                    </el-form-item>
                    <div class="clearfix">
                        <el-form-item label="姓名：" class="left" style="width: 50%">
                            <el-input v-model="form.b"></el-input>
                        </el-form-item>
                        <el-form-item label="电话：" class="left" style="width: 50%">
                            <el-input v-model="form.c"></el-input>
                        </el-form-item>
                    </div>
                    <div class="clearfix">
                        <el-form-item label="地址：" class="left" style="width: 50%">
                            <el-input v-model="form.d"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱：" class="left" style="width: 50%">
                            <el-input v-model="form.e"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item label="是否公开：">
                        <span class="btns btns-small btns-cir-small btns-blue">是</span>
                        <span class="btns btns-small btns-cir-small left20 btns-bor">否</span>
                    </el-form-item>
                    <el-form-item label="内容：">
                        <el-input v-model="form.f" type="textarea"></el-input>
                    </el-form-item>
                </el-form>
                <div class="center top30">
                    <span class="btns btns-big btns-grey">重置</span>
                    <span class="btns btns-big btns-blue left20" @click="onSubmit('form')">提交</span>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "ConsultationCenter",
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
            }
        }
	},
    components: {
        
    },
    methods: {
        onSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
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
.el-form-item__label{ font-size: 22px; line-height: 48px}
.el-input__inner{ height: 48px;}
</style>
