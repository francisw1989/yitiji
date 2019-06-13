<template>
<div style="padding: 30px 50px">
    <div class="formTitle">
        <p class="colblue2 font22" style=" border-bottom: 1px solid #1755B1; padding-bottom: 15px">电子资料上传</p>
    </div>
    <table class="m-table2 top30">
        <tr>
            <td class="align-right" style="width: 300px;"><span class="colblue2 font22">申报人身份证：</span></td>
            <td class="align-left">
                <div class="upImgWap"><img src="../../../assets/img13.png" alt="" @click="doshowTck"></div>
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
    <div class="tck-cover" v-if="showTck">
        <Photoshot></Photoshot>
    </div>
</div>
</template>

<script>
import Photoshot from '../../common/Photoshot.vue'

export default {
    name: "Dzzl",
    data() {
        return {
            showTck: false
        }
    },
    components: {
        Photoshot
    },
    methods: {
        doshowTck() {
            const t = this;
            debugger
            t.showTck = true;
        }
    },
    mounted() {
        const t = this;
        t.photoList = window.photoList;
    }
}
</script>

<style>
@import "../../../style.css";
.el-form-item__label{ color: #1755B1 }

.jgWap .btns{ width: 187px;}
.el-form-item__content .jgWap .btns{ width: 169px; margin: 2px 2px}
</style>
