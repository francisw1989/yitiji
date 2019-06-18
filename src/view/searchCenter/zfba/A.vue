<template>
    <div class="boxWapAll2 top25" style="padding: 50px 70px;">
        <p class="colblue font26 center">查 询 须 知</p>
        <div class="xzWap top20">
            <table class="m-table2">
                <tr>
                    <td style="width: 26px"><span class="dian2 top5"></span></td>
                    <td>
                        <p class=" font20 col333 bold">公开的内容</p>
                        <p class="font20 top10">1、行政处罚的受理及结果；2、刑事案件的程序及强制措施。</p>
                        <p class="top20 font20 col999">注：法律法规禁止公开的案件不予公开</p>
                    </td>
                </tr>
                <tr>
                    <td style="width: 26px"><span class="dian2 top5"></span></td>
                    <td>
                        <p class=" font20 col333 bold">查询人</p>
                        <p class="font20 top10">1、案件当事人；2、犯罪嫌疑人的辩护律师；3、案件当事人亲属。</p>
                    </td>
                </tr>
                <tr>
                    <td style="width: 26px"><span class="dian2 top5"></span></td>
                    <td>
                        <p class=" font20 col333 bold">注意事项</p>
                        <p class="font20 top10">
                            1、首次查询时，需要您上传身份证正反面照片，并进行人脸识别后方可查询案件信息。<br/>2、本查询结果涉及公民个人信息，仅限查询人了解案件情况，严禁将查询结果传播和公开披露。
                        </p>
                    </td>
                </tr>
            </table>
        </div>
        <div class="top50 center">
            <span class="btns btns-big btns-blue" @click="next">我已阅读</span>
        </div>
    </div>
</template>

<script>

export default {
    name: "ZfbaA1",
    data() {
        return {
            
        }
	},
    components: {
        
    },
    methods: {
        next(){
            // localStorage.beforePath = path;
            this.$router.push('/IDWap')
        },
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
