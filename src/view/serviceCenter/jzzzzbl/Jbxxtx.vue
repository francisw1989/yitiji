<template>
<div style="padding: 30px 50px">
    <div class="formTitle">
        <p class="colblue2 font22" style=" border-bottom: 1px solid #1755B1; padding-bottom: 15px">基本信息填写</p>
    </div>
    <el-form class="top25" label-position="right" :model="form" ref="form" :rules="rules" label-width="120px">
        <div class="clearfix">
            <el-form-item prop="xm" label="姓名" class="left" style="width: 50%;">
                <el-input readonly v-model="form.xm" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item prop="sfzh" label="身份证号" class="left" style="width: 50%">
                <el-input readonly v-model="form.sfzh" placeholder="请输入"></el-input>
            </el-form-item>
        </div>
        <div class="clearfix">
            <el-form-item prop="lxdh" label="联系电话" class="left" style="width: 50%">
                <el-input v-model="form.lxdh" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item prop="xzz" label="现住址"  class="left" style="width: 50%">
                <el-input v-model="form.xzz" placeholder="请输入"></el-input>
            </el-form-item>
        </div>
        <div class="clearfix" v-if="form.jzsylb==1 || form.jzsylb==5">
            <el-form-item prop="fzxm" label="房主姓名" class="left" style="width: 50%">
                <el-input v-model="form.fzxm" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item prop="fzlxdh" label="房主电话" class="left" style="width: 50%">
                <el-input v-model="form.fzlxdh" placeholder="请输入"></el-input>
            </el-form-item>
        </div>
        <div class="clearfix" v-if="form.jzsylb==3">
            <el-form-item prop="fzxm" label="单位联系人" class="left" style="width: 50%">
                <el-input v-model="form.fzxm" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item prop="fzlxdh" label="单位联系电话" class="left" style="width: 50%">
                <el-input v-model="form.fzlxdh" placeholder="请输入"></el-input>
            </el-form-item>
        </div>
        <el-form-item label="管辖机关" style="width: 50%">
            <el-input readonly suffix-icon="el-icon-arrow-down" v-model="form.zggajgmc" placeholder="请选择管辖机关" @focus="focus"></el-input>
        </el-form-item>
        <el-form-item label="文化程度">
            <div class="jgWap" style="width: auto">
                <span @click="sel($event, i, 'whcd')" :class="'btns ' + v.class " v-for="(v, i) in whcd" :key="i">{{v.itemName}}</span>
            </div>
        </el-form-item>
        <el-form-item label="政治面貌">
            <div class="jgWap" style="width: auto">
                <span @click="sel($event, i, 'zzmm')" :class="'btns ' + v.class " v-for="(v, i) in zzmm" :key="i">{{v.itemName}}</span>
            </div>
        </el-form-item>
        <el-form-item label="婚姻状况">
            <div class="jgWap" style="width: auto">
                <span @click="sel($event, i, 'hyzk')" :class="'btns ' + v.class " v-for="(v, i) in hyzk" :key="i">{{v.itemName}}</span>
            </div>
        </el-form-item>
        <el-form-item label="居住事由">
            <div class="jgWap" style="width: auto">
                <span @click="sel($event, i, 'jzsy')" :class="'btns ' + v.class " v-for="(v, i) in jzsy" :key="i">{{v.itemName}}</span>
            </div>
        </el-form-item>
        <el-form-item style="display: none">
            <span class="sub" @click="submitForm('form')">提交</span>
        </el-form-item>
    </el-form>
    <el-dialog title="管辖机关" top="0" custom-class="modal" center :visible.sync="visible" :show-close="false">
        <div class="jgWap">
            <span @click="selxgjg($event, i)" :class="'btns ' + v.class " v-for="(v, i) in gajgdm" :key="i">{{v.itemName}}</span>
        </div>
        <div class="center top40">
            <span class="btns btns-big btns-grey" @click="closeModal">取消</span>
            <span class="btns btns-big btns-blue left35" @click="confirm">确定</span>
        </div>
    </el-dialog>
</div>
</template>

<script>
import emit from '../../../emit.js';
export default {
    name: "Jbxxtx",
    data() {
        return {
            form: {
                dzcl: [
                    
                ],
                fwsylx: "",
                fzlxdh: "18251845471",
                fzxm: "房主姓名",
                hyzk: "",
                jzcs: "",
                jzsy: "",
                jzsylb: "",
                lxdh: "18251845471",
                sfzdqsj: "",
                sfzh: "",
                whcd: "",
                xm: "",
                xzz: "郑州",
                zggajg: "",
                zggajgmc: "",
                zzmm: ""
            },
            rules: {
                xm: [
                    {required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                sfzh: [
                    {required: true, message: '请输入身份证号', trigger: 'blur' }
                ],
                lxdh: [
                    {required: true, message: '请输入联系电话', trigger: 'blur' }
                ],
                xzz: [
                    {required: true, message: '请输入现住址', trigger: 'blur' }
                ],
                fzxm: [
                    {required: true, message: '请输入房主姓名', trigger: 'blur' }
                ],
                fzlxdh: [
                    {required: true, message: '请输入房主电话', trigger: 'blur' }
                ]
            },
            visible: false,
            gajgdm: [],
            whcd: [],
            zzmm: [],
            hyzk: [],
            jzsy: []
        }
    },
    components: {
        
    },
    methods: {
        closeModal(){
            const t = this;
            t.visible = false;
            for (const v of t.gajgdm) {
                v.class = ''
            }
            t.gajgdm = JSON.parse(JSON.stringify(t.gajgdm));
        },
        confirm(){
            const t = this;
            t.closeModal();
            t.form.zggajgmc = t.selectGajgdm.itemName;
            t.form.zggajg = t.selectGajgdm.itemValue;
        },
        selxgjg(e, i){
            const t = this;
            for (const v of t.gajgdm) {
                v.class = ''
            }
            t.gajgdm[i].class = 'active';
            t.gajgdm = JSON.parse(JSON.stringify(t.gajgdm));
            t.selectGajgdm = t.gajgdm[i];
        },
        sel(e, i, key){
            const t = this;
            for (const v of t[key]) {
                v.class = ''
            }
            t[key][i].class = 'active';
            t[key] = JSON.parse(JSON.stringify(t[key]));
            t.form[key] = t[key][i].itemName;
        },
       
        focus(){
            const t = this;
            t.visible = true;
        },
        initData(){
            const t = this;
            let data = localStorage.IDCardBase64?JSON.parse(localStorage.IDCardBase64) : window.IDCardBase64;
            t.form.xm = data.sName;
            t.form.sfzh = data.sIDNo;
            t.form.fwsylx = window.fwsylx;
            t.form.jzsylb = window.jzsylb;
            t.gajgdm = JSON.parse(JSON.stringify(window.gajgdm));
            t.whcd = JSON.parse(JSON.stringify(window.whcd));
            t.zzmm =  JSON.parse(JSON.stringify(window.zzmm));
            t.hyzk = JSON.parse(JSON.stringify(window.hyzk));
            t.jzsy = JSON.parse(JSON.stringify(window.jzsy));
        },
        submitForm(formName) {
            const t = this;
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    
                    if(!t.form.zggajg){
                        this.$message({
                            message: '请选择辖管机关',
                            type: 'warning'
                        });
                        return
                    }
                    if(!t.form.whcd){
                        this.$message({
                            message: '请选择文化程度',
                            type: 'warning'
                        });
                        return
                    }
                    if(!t.form.zzmm){
                        this.$message({
                            message: '请选择政治面貌',
                            type: 'warning'
                        });
                        return
                    }
                    if(!t.form.hyzk){
                        this.$message({
                            message: '请选择婚姻状况',
                            type: 'warning'
                        });
                        return
                    }
                    emit.$emit('finishBaseMessage',{
                        finishBaseMessage: true,
                        form: t.form
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    
    },
    mounted() {
        const t = this;
        
        document.querySelector('#secondTitle').innerHTML = '<span class="left10 right10">></span>' + window.secondTitle
        t.initData()
    }
}
</script>

<style>
@import "../../../style.css";
.el-form-item__label{ color: #1755B1 }
</style>
