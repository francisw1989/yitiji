<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div style="padding: 60px 80px" v-if="!isNext">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="125px">
                    <el-form-item label="姓名："  prop="a">
                        <el-input v-model="form.a"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号："  prop="b">
                        <el-input v-model="form.a"></el-input>
                    </el-form-item>
                </el-form>
                <div class="center top30">
                    <span class="btns btns-big btns-blue" @click="onSubmit('form')">人脸识别</span>
                </div>
            </div>
            <div class="center" style="padding: 60px 80px" v-if="isNext">
                <FaceRecognition></FaceRecognition>
            </div>
           
        </div>
    </div>
</template>

<script>
import FaceRecognition from '../common/FaceRecognition';
export default {
    name: "Lssfzmkj",
    data() {
        return {
            isNext: false,
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
        FaceRecognition
    },
    watch:{
        
    },
    methods: {
        onSubmit(formName){
            const t = this;
            // this.$router.push({ path:'faceRecognition'})
            // this.$refs[formName].validate((valid) => {
            //     if (valid) {
            //         alert('submit!');
            //     } else {
            //         console.log('error submit!!');
            //         return false;
            //     }
            // });
            t.isNext = true
    
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
