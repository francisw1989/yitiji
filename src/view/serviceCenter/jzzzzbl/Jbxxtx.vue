<template>
<div style="padding: 30px 50px">
    <div class="formTitle">
        <p class="colblue2 font22" style=" border-bottom: 1px solid #1755B1; padding-bottom: 15px">基本信息填写</p>
    </div>
    <el-form class="top25" label-position="right" :model="form" ref="form" :rules="rules" label-width="120px">
        <div class="clearfix">
            <el-form-item prop="a" label="姓名" class="left" style="width: 50%;">
                <el-input v-model="form.a" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" class="left" style="width: 50%">
                <el-input v-model="form.e" placeholder="请输入"></el-input>
            </el-form-item>
        </div>
        <div class="clearfix">
            <el-form-item label="联系电话" class="left" style="width: 50%">
                <el-input v-model="form.a" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="现住址" class="left" style="width: 50%">
                <el-input v-model="form.e" placeholder="请输入"></el-input>
            </el-form-item>
        </div>
        <div class="clearfix">
            <el-form-item label="房主姓名" class="left" style="width: 50%">
                <el-input v-model="form.a" placeholder="请输入"></el-input>
            </el-form-item>
            <el-form-item label="房主电话" class="left" style="width: 50%">
                <el-input v-model="form.e" placeholder="请输入"></el-input>
            </el-form-item>
        </div>
        <el-form-item label="管辖机关" style="width: 50%">
            <el-input v-model="form.a" placeholder="请选择管辖机关" @focus="focus"></el-input>
        </el-form-item>
        <el-form-item label="文化程度">
            <div class="jgWap">
                <span @click="selCx(v.name)" :class="'btns ' + v.class " v-for="(v, i) in whList" :key="i">{{v.name}}</span>
            </div>
        </el-form-item>
        <el-form-item label="政治面貌">
            <div class="jgWap">
                <span @click="selCx(v.name)" :class="'btns ' + v.class " v-for="(v, i) in zzList" :key="i">{{v.name}}</span>
            </div>
        </el-form-item>
        <el-form-item label="婚姻状况">
            <div class="jgWap">
                <span @click="selCx(v.name)" :class="'btns ' + v.class " v-for="(v, i) in hyList" :key="i">{{v.name}}</span>
            </div>
        </el-form-item>
    </el-form>
    <el-dialog width="84%" title="管辖机关" top="0" custom-class="modal" center :visible.sync="visible" :show-close="false">
        <div class="jgWap">
            <span @click="selCx(v.name)" :class="'btns ' + v.class " v-for="(v, i) in jgList" :key="i">{{v.name}}</span>
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
    name: "Jbxxtx",
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
            jgList: [
                {name: '金水路分局', class: 'active'},
                {name: '金水路分局'},
                {name: '金水路分局'},
                {name: '金水路分局'},
                {name: '金水路分局'},
                {name: '金水路分局'},
            ],
            whList: [
                {name: '研究生', class: 'active'},
                {name: '本科'},
                {name: '大专'},
                {name: '中专'},
                {name: '技工学校'},
                {name: '高中'},
                {name: '初中'},
                {name: '小学'},
                {name: '文盲'},
                {name: '未知'},
            ],
            zzList: [
                {name: '共产党员', class: 'active'},
                {name: '共青团员'},
                {name: '群众'},
            ],
            hyList: [
                {name: '未婚', class: 'active'},
                {name: '已婚'},
                {name: '丧偶'},
                {name: '离婚'},
                {name: '未说明的状况'},
            ]
        }
    },
    components: {

    },
    methods: {
        choosen(i) {
            const t = this;
            for (const v of t.m) {
                v.active = ''
            }
            t.m[i].active = 'active';
            t.m = JSON.parse(JSON.stringify(t.m));
        },
        focus(){
            const t = this;
            t.visible = true;
        }
    },
    mounted() {
        const t = this;

    }
}
</script>

<style>
@import "../../../style.css";
.el-form-item__label{ color: #1755B1 }
.jgWap .btns{ width: 187px;}
.el-form-item__content .jgWap .btns{ width: 169px; margin: 2px 2px}
</style>
