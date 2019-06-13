<template>
<div style="padding: 30px 50px">
    <div class="formTitle">
        <p class="colblue2 font22" style=" border-bottom: 1px solid #1755B1; padding-bottom: 15px">电子资料上传</p>
    </div>
    <table class="m-table2 top30">
        <tr v-for="(v, i) in dzcl" :key="i">
            <td class="align-right" style="width: 300px;"><span class="colblue2 font22">{{v.title}}：</span></td>
            <td class="align-left">
                <div class="upImgWap" v-for="(a, b) in v.dzcldata" :key="b"><img src="../../../assets/img13.png" alt="" @click="doshowTck"></div>
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
            showTck: false,
            dzcl: []
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
        t.dzcl = JSON.parse(JSON.stringify(window.dzcl));
    }
}
</script>

<style>
@import "../../../style.css";
.el-form-item__label{ color: #1755B1 }

.jgWap .btns{ width: 187px;}
.el-form-item__content .jgWap .btns{ width: 169px; margin: 2px 2px}
</style>
