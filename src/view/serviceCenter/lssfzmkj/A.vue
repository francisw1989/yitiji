<template>
    <div class="boxWapAll2 top25">
        <div style="padding: 60px 80px">
            <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="140px">
                <el-form-item label="姓名：" prop="name">
                    <el-input :autofocus='autofocus' v-model="form.name" @focus="inputFocus($event, 0)"></el-input>
                </el-form-item>
                <el-form-item label="身份证号：" prop="cardNo">
                    <el-input v-model="form.cardNo" @focus="inputFocus($event, 3)"></el-input>
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
            autofocus: false,
            isNext: false,
            form: {
                // name: '吴正龙',
                // cardNo: '320925198803242036'
                name: '',
                cardNo: ''
            },
            rules: {
                name: [
                    {required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                cardNo: [
                    {required: true, validator: cardVa, trigger: 'blur' }
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
                let params = JSON.parse(localStorage.form)
                // t.$javaService.lssfzm(t, params, localStorage.faceBase64).then((res)=>{
                //     localStorage.faceBase64 = res;
                //     t.$router.push('/serviceCenter/lssfzmkj/c')
                // },(res)=>{
                //     t.$alert(res,'',{
                //         showClose: false
                //     });
                // })
                // return
                
                if (valid) {
                    t.$systemService.CloseKeyBoard(t);
                    t.$router.push('/serviceCenter/lssfzmkj/b')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        inputFocus(e, type){
            const t = this;
            t.$systemService.inputFocus(e, type)
            
        }
    },
    mounted(){
        const t = this;
        setTimeout(() => {
            t.autofocus = true
        }, 1000);
    }
}
</script>

<style>
@import "../../../style.css";
</style>
