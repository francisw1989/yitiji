<template>
    <div class="boxWapAll2 top25">
        <div class="pad30">
            <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="160px">
                <el-form-item label="选择车型：" prop="hpzlmc">
                    <el-input suffix-icon="el-icon-arrow-down" readonly="" v-model="form.hpzlmc" @focus="focus" placeholder="请选择车型"></el-input>
                </el-form-item>
                <div class="clearfix">
                    <el-form-item prop="hphm" label="车牌号码：" class="left relative" style="width: 50%">
                        <el-input @focus="inputFocus($event, 1)" v-model="form.hphm" class="speInputWap" placeholder="输入车牌号"></el-input>
                        <div class="cphm">豫</div>
                    </el-form-item>
                    <el-form-item prop="cjh" label="车架号码：" class="left" style="width: 50%">
                        <el-input @focus="inputFocus($event, 3)" v-model="form.cjh" placeholder="输入车架号码后六位"></el-input>
                    </el-form-item>
                </div>
            </el-form>
            <div class="center top30">
                <span class="btns btns-big btns-blue" @click="onSubmit('form')">查询</span>
            </div>
        </div>
        <el-dialog title="车型" top="0" custom-class="modal" center :visible.sync="visible" :show-close="false">
            <div class="jgWap">
                <span @click="selCx($event, i)" :class="'btns ' + v.class " v-for="(v, i) in cx" :key="i">{{v.itemName}}</span>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey" @click="cancle">取消</span>
                <span class="btns btns-big btns-blue left35" @click="confirm">确定</span>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: "JtwfclA",
    data() {
        let cjhLength = (rule, value, callback)=>{
            if (value.length!=6) {
                callback(new Error('请填写6位数车架号码'));
            }else{
                callback()
            }
        }
        let cphLength = (rule, value, callback)=>{
            if (value.length!=6) {
                callback(new Error('请填写正确格式的车牌号'));
            }else{
                callback()
            }
        }
        return {
            
            form: {
                hpzl: '',
                hpzlmc: '',
                hphm: '',
                sfzmhm: '',
                cjh: ''
            },
            rules: {
                hpzlmc: [
                    {required: true, message: '请选择车型' }
                ],
                hphm: [
                    {required: true, message: '请填写车牌号码' },
                    {validator: cphLength }

                ],
                cjh: [
                    {required: true, message: '请填写车架号码' },
                    {validator: cjhLength }
                ]
            },
            visible: false,
            cx: []
        }
	},
    components: {
        
    },
    methods: {
        inputFocus(e, type){
            const t = this;
            t.$systemService.inputFocus(e, type)
            
        },
        cancle(){
            const t = this;
            t.visible = false;
            
        },
        confirm(){
            const t = this;
            t.visible = false;
            t.form.hpzl = t.cx[t.cxIndex].itemValue;
            t.form.hpzlmc = t.cx[t.cxIndex].itemName;
        },
        focus(){
            const t = this;
            t.visible = true;
        },
        selCx(e, i){
            const t = this;
            for(const v of t.cx){
                v.class = '';
            };
            t.cxIndex = i;
            t.cx[i].class = 'active';
            t.cx = JSON.parse(JSON.stringify(t.cx));
        },
        onSubmit(formName){
            const t = this;
            t.$refs[formName].validate((valid) => {
                if (valid) {
                    t.form.hphm = '豫' + t.form.hphm;
                    window.form = t.form;
                    t.$router.push('/serviceCenter/jtwfcl/b')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            
        },
        initData(){
            const t = this;
            let setinter = setInterval(()=>{
                if(window.cx){
                    t.cx = JSON.parse(JSON.stringify(window.cx));
                    clearInterval(setinter)
                }
            },100)
            t.form.sfzmhm = '411522198801120061';
            t.form.xm = '钟文';
            return
            if(localStorage.IDCardBase64){
                t.form.sfzmhm = JSON.parse(localStorage.IDCardBase64).sIDNo;
                t.form.xm = JSON.parse(localStorage.IDCardBase64).sName
            } else {
                t.form.sfzmhm = window.IDCardBase64.sIDNo;
                t.form.xm = window.IDCardBase64.xm;
            }
            
        }
    },
    mounted(){
        const t = this;
        t.initData();
        



        
    }
}
</script>

<style>
@import "../../../style.css";

.speInputWap input{padding-left: 115px}
</style>
