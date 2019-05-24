<template>
    <div class="boxWapAll2 top25">
        <div style="padding: 60px 80px">
            <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="125px">
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="form.name" @focus="inputFocus"></el-input>
                </el-form-item>
                <el-form-item label="身份证号：" prop="cardNo">
                    <el-input v-model="form.cardNo" @focus="inputFocus"></el-input>
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
                name: '张三',
                cardNo: '321283198904173216'
            },
            rules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                cardNo: [
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
            t.$refs[formName].validate((valid) => {
                localStorage.form = JSON.stringify(t.form)
                if (valid) {
                    t.$router.push('/serviceCenter/lssfzmkj/b')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        inputFocus(e){
            const t = this;
            let params = {'x':e.target.getBoundingClientRect().x,'y':e.target.getBoundingClientRect().y + 48,'type':1};
            t.$systemService.OpenKeyBoard(t, params).then((res)=>{
                console.log(res)
            })
        },
        inputBlur(e){
            const t = this;
            t.$systemService.CloseKeyBoard(t)
        }
    },
    mounted(){
        const t = this;
        document.addEventListener('click', (e) => {
            if(e.target.nodeName!='INPUT'){
                t.$systemService.CloseKeyBoard(t)
            }
        }, false);
    }
}
</script>

<style>
@import "../../../style.css";
</style>
