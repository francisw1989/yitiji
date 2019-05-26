<template>
    <div class="boxWapAll2 top25">
        <div class="center" style="padding: 60px 80px">
            <div class="xxWap">
                <p class="font24 center bor_btm_so" style="line-height:50px">人员基本信息</p>
                <div class="top30 relative">
                    <img :src="'data:image/png;base64,'+info.sPhotoBuffer" class="tx" alt="">
                    <table class="font22 m-table1">
                        <tr>
                            <td>身份证号：</td>
                            <td>{{info.sIDNo}}</td>
                        </tr>
                        <tr>
                            <td>姓　　名：</td>
                            <td>{{info.sName}}</td>
                        </tr>
                        <tr>
                            <td>性　　别：</td>
                            <td>{{info.sSex}}</td>
                        </tr>
                        <tr>
                            <td>民　　族：</td>
                            <td>{{info.sNation}}</td>
                        </tr>
                        <tr>
                            <td>出生日期：</td>
                            <td>{{info.sBornDate}}</td>
                        </tr>
                        <tr>
                            <td>住　　址：</td>
                            <td>{{info.sAddress}}</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="top40">
                <span class="btns btns-big btns-blue" @click="rlsb">人脸识别</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WzjlzmkjB",
    data() {
        return {
            info:{}
        }
	},
    components: {
        
    },
    methods: {
        rlsb(){
            const t = this;
            t.$router.push('/serviceCenter/wzjlzmkj/c');
        }
    },
    mounted(){
        const t = this;
            debugger
        t.info = JSON.parse(localStorage.IDCardBase64);
    }
}
</script>

<style>
@import "../../../style.css";
</style>
