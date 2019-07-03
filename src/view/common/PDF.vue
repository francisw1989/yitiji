<template>
    <div>
        <div id="js"></div>
        <div>
            <span @click="print" id="print" class="btns btns-nom btns-blue right" style="margin-top: -70px"><i class="icoAll ico14"></i><span class="left5 verMid">打印</span></span>
        </div>

        <div style="text-align: center; margin: 0 auto; overflow: hidden">
            <!-- <iframe id="print" src="#/blank" style="width:100%; height:100%; border: 0; display: none"></iframe> -->
            <canvas id="the-canvas"></canvas>
        </div>
        <div id="img"></div>
    </div>
</template>

<script>
import emit from '../../emit.js';
import PDFJS from 'pdfjs-dist';
let PDFDoc = require('../../assets/crj.pdf');
export default {
    props: ['type'],
    name: "PDF",
    data() {
        return {
            PDFBase64: ''
        };
    },
    components: {

    },

    methods: {
        print(){
            // let src = this.canvas.toDataURL("image/png",1.0);
            // document.querySelector('#print').contentWindow.document.querySelector('#area').innerHTML = ('<img src="'+src+'"/>')
            // setTimeout(() => {
            //     document.querySelector('#print').contentWindow.print()    
            // }, 100);
            const t = this;
            
            let _do = ()=>{
                
                t.$systemService.PrintDocument(t);
            }
            let msg = '';
            let href = window.location.href;
            if(href.indexOf('lssfzmkj')>-1){
                msg = '温馨提示：临时身份证明当天只能打印一张，请妥善保存！'
            }
            if(href.indexOf('wzjlzmkj')>-1){
                msg = '温馨提示：无犯罪记录证明七天内只可打印一张，请妥善保存！'
            }
            if(msg){
                t.$alert(msg,'',{
                    showClose: false
                }).then(()=>{
                    _do();
                });
            }else{
                _do();
            }
            
            
            
        },
        pdf(){
            const t = this;
            let _do = ()=>{
                console.log(t.type)
                let data;
                t.loading = t.$Loading.service({
                    text: 'loading。。。'
                });
                if(t.type == 'pdf'){
                    // 本地pdf
                    data = 'data:application/pdf;base64,' + window.crjBase64;
                }else{
                    data = 'data:application/pdf;base64,' + t.PDFBase64;
                }
                PDFJS.getDocument(data).then(function getPdfHelloWorld(pdf) {
                    //
                    // Fetch the first page
                    //
                    pdf.getPage(1).then(function getPageHelloWorld(page) {
                        var scale = 1.5;
                        var viewport = page.getViewport(scale);

                        //
                        // Prepare canvas using PDF page dimensions
                        //
                        var canvas = document.getElementById('the-canvas');
                        var context = canvas.getContext('2d');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        t.canvas = canvas;
                        //
                        // Render PDF page into canvas context
                        //
                        page.render({canvasContext: context, viewport: viewport});
                    });
                });
                t.loading.close();

                
            }
            _do()
        }
    },
    
    mounted(){
        const t = this;
        document.querySelector('.boxWapAll2').style.overflow = 'inherit'
        if(t.type == 'pdf'){
            localStorage.PDFBase64 = window.crjBase64;
        }
        if(localStorage.PDFBase64){
            t.PDFBase64 = localStorage.PDFBase64;
            t.pdf();
        }else{
            // t.pdf();
            
            t.$alert('抱歉！本系统不能辨别您的需求，请到属地派出所申请办理','',{
                showClose: false
            }).then(()=>{
                document.querySelector('.btnIndex').click()
            });
        }

    }
}
</script>

<style>
@import "../../style.css";
</style>
