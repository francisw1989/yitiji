<template>
    <div class="boxWapAll2 top25 relative">
        <PDF v-if="showPDF"></PDF>
    </div>
</template>

<script>
import PDF from '../../common/PDF.vue';
export default {
    name: "WzjlzmkjD",
    data() {
        return {
            showPDF: false
        }
	},
    components: {
        PDF
    },
    watch:{
        
    },
    methods: {
        wfzjlzm(){
            const t = this;
            // let info = JSON.parse(localStorage.IDCardBase64);
            // let params = {
            //     cardNo: info.sIDNo,
            //     name: info.sName
            // };
            let params = {
                cardNo: '622102196206279637',
                name: '薛土岭'
            };
            t.$javaService.wfzjlzm(t, params).then((res)=>{
                localStorage.PDFBase64 = res;
                t.showPDF = true;
            },(res)=>{
                
            })
        }
        
    },
    mounted(){
        const t = this;
        t.wfzjlzm();
    }
}
</script>

<style>
@import "../../../style.css";
</style>
