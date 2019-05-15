<template>
<div style="padding: 30px 50px">
    <div class="formTitle">
        <p class="colblue2 font22" style=" border-bottom: 1px solid #1755B1; padding-bottom: 15px">电子资料上传</p>
    </div>
    <table class="m-table2 top30">
        <tr>
            <td class="align-right" style="width: 300px;"><span class="colblue2 font22">申报人身份证：</span></td>
            <td class="align-left">
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
            </td>
        </tr>
        <tr>
            <td class="align-right"><span class="colblue2 font22">租房合同/出租房屋备案证明：</span></td>
            <td class="align-left">
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
            </td>
        </tr>
        <tr>
            <td class="align-right"><span class="colblue2 font22">房主身份证复印件：</span></td>
            <td class="align-left">
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
            </td>
        </tr>
        <tr>
            <td class="align-right"><span class="colblue2 font22">房产证/购房合同、发票：</span></td>
            <td class="align-left">
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
                <div class="upImgWap"><img src="../../../assets/img13.png" alt=""></div>
            </td>
        </tr>
    </table>
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
    name: "Dzzl",
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
