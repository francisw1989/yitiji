<template>
    <div class="boxWapAll2 top25">
        <div style="padding: 60px 80px">
            <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="125px">
                <el-form-item label="姓名："  prop="a">
                    <el-input v-model="form.a"></el-input>
                </el-form-item>
                <el-form-item label="身份证号："  prop="b">
                    <el-input v-model="form.b"></el-input>
                </el-form-item>
            </el-form>
            <div class="center top30">
                <span class="btns btns-big btns-blue" @click="onSubmit('form')">人脸识别</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LssfzmkjA",
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
            isNext: false,
            form: {
                a: '',
                b: ''
            },
            rules: {
                a: [
                    {required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                b: [
                    {validator: cardVa, trigger: 'blur' }
                ]
            }
        }
	},
    components: {
        
    },
    watch:{
        
    },
    methods: {
        onSubmit(formName){
            const t = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$router.push('/serviceCenter/lssfzmkj/b')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
    
        }
    },
    mounted(){
        const t = this;
        this.$errorLogService.a();
    }
}
</script>

<style>
@import "../../../style.css";
</style>
