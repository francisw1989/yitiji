<template>
    <div class="boxWapAll2 clearfix top25" pa>
        <div style="padding-bottom: 50px">
            <div style="padding:90px 50px 0 50px; overglow: hidden" v-if="step==1">
                <p class="font24b colblue">请选择申报类别：</p>
                <div class="top90 center" style="margin-bottom: 80px">
                    <div @click="choosen(i)" :class="'sblbBox clearfix ' + v.active" v-for="(v, i) in m" :key="i">
                        <i :class="'icoAll top60 ' + v.ico "></i>
                        <p class="colblue2 font24b top40">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <Jbxxtx v-if='step==2'></Jbxxtx>
            <Dzzl v-if="step==3"></Dzzl>
            <div class="center top20" v-if="step!=3">
                <span id="btnPrev" :class="'btns btns-big btns-blue ' + prevDisabled " @click="prev">上一步</span>
                <span class="btns btnsub btns-big btns-blue left50 " @click="next">下一步</span>
            </div>
            <div class="center top20" v-if="step==3">
                <span id="btnPrev" :class="'btns btns-big btns-blue ' + prevDisabled " @click="prev">上一步</span>
                <span :class="'btns btnsub btns-big btns-blue left50 ' + nextDisabled " @click="sub">提交</span>
            </div>
        </div>
        
    </div>
</template>

<script>
import emit from '../../../emit.js';
import ID from '../../common/ID.vue';
import Jbxxtx from './Jbxxtx.vue';
import Dzzl from './Dzzl.vue';
export default {
    name: "JzzzzblA",
    data() {
        return {
            step: 1,
            prevDisabled: 'disabled',
            nextDisabled: '',
            m: [
                {ico: 'gIco1', title: '出租房屋', jzsylb: '1', fwsylx: '20',dzcl:[
                    {
                        dzcldata: [{base64DATA: window.IDCardBase64.sPhotoBuffer},{base64DATA: window.IDCardBase64.sPhotoBuffer}],
                        dzcllx: "00",
                        title: '申报人身份证'
                    },
                    {
                        dzcldata: [{base64DATA: window.IDCardBase64.sPhotoBuffer},{base64DATA: ""},{base64DATA: ""},{base64DATA: ""},{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "01",
                        title: '租房合同'
                    },
                    {
                        dzcldata: [{base64DATA: window.IDCardBase64.sPhotoBuffer}],
                        dzcllx: "02",
                        title: '房主身份证复印件'
                    },
                    {
                        dzcldata: [{base64DATA: window.IDCardBase64.sPhotoBuffer},{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "03",
                        title: '房产证/购房合同、发票'
                    },
                ]},
                {ico: 'gIco2', title: '自有房屋', jzsylb: '2', fwsylx: '10', dzcl:[
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "00",
                        title: '申报人身份证'
                    },
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "03",
                        title: '房产证/购房合同、发票'
                    },
                ],},
                {ico: 'gIco3', title: '单位内部', jzsylb: '3', fwsylx: '20', dzcl:[
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "00",
                        title: '申报人身份证'
                    },
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""},{base64DATA: ""},{base64DATA: ""},{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "07",
                        title: '劳动合同/劳动关系证明'
                    },
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "08",
                        title: '住宿证明'
                    },
                ]},
                {ico: 'gIco4', title: '学校就读', jzsylb: '4', fwsylx: '20', dzcl:[
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "00",
                        title: '申报人身份证'
                    },
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "06",
                        title: '学生证'
                    },
                    {
                        dzcldata: [{base64DATA: ""}],
                        dzcllx: "08",
                        title: '住宿证明'
                    },
                ]},
                {ico: 'gIco5', title: '亲属房屋', jzsylb: '5', fwsylx: '20',dzcl:[
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "00",
                        title: '申报人身份证'
                    },
                    {
                        dzcldata: [{base64DATA: "3232323"}],
                        dzcllx: "02",
                        title: '房主身份证复印件'
                    },
                    {
                        dzcldata: [{base64DATA: ""},{base64DATA: ""},{base64DATA: ""}],
                        dzcllx: "03",
                        title: '房产证/购房合同、发票'
                    },
                    {
                        dzcldata: [{base64DATA: ""}],
                        dzcllx: "05",
                        title: '关系证明'
                    },
                    
                    
                ]},
            ],
        }
	},
    components: {
        ID,
        Jbxxtx,
        Dzzl,
    },
    methods: {
        sub(){
            const t = this;
            let params = t.form;
            if(!params.dzcl.length){
                this.$message({
                    message: '请上传相关图像',
                    type: 'warning'
                });
                return;
            }
            t.$javaService.sbzzdj(t, params).then((res)=>{

            })
        },
        choosen(i){
            const t = this;
            for(const v of t.m){
                v.active = ''
            }
            t.m[i].active = 'active';
            t.m = JSON.parse(JSON.stringify(t.m));
            // 首界面选择申报类别时带过去相关
            window.secondTitle = t.m[i].title;
            window.fwsylx = t.m[i].fwsylx;
            window.jzsylb = t.m[i].jzsylb;
            window.dzcl = t.m[i].dzcl;
        },
        next(){
            const t = this;
            t.nextDisabled = '';
            if(t.step == 1){
                t.step ++ ;
                t.prevDisabled = '';
                return
            }
            if(t.step == 2){
                document.querySelector('.sub').click();
                return
            }
            if(t.step == 3){
                t.nextDisabled = 'disabled';
                
                return;
            }
            
        },
        prev(){
            const t = this;
            t.prevDisabled = '';
            if(t.step == 2 ){
                t.prevDisabled = 'disabled';
            }
            if(t.step == 1 ){
                t.prevDisabled = 'disabled';
                return
            }
            t.step -- ;
            t.nextDisabled = '';
        }
    },
    mounted(){
        const t = this;

        document.querySelector('#secondTitle').innerHTML = '';

        t.choosen(0)
        
        emit.$on("finishBaseMessage",(res)=>{
			if(res.finishBaseMessage){
                console.log(res.form);
                t.form = res.form;
                t.nextDisabled = 'disabled';
                t.step ++ ;
                t.prevDisabled = '';
			}
        });
        emit.$on("finishPhotoshot",(res)=>{
			if(res.finishPhotoshot){
                t.dzcl = res.dzcl;
                t.form.dzcl = t.dzcl;
                t.nextDisabled = '';
                // 关闭高拍仪窗口
                t.$systemService.HPACloseWindows()
                // 关灯
                t.$systemService.HPALightOff()
			}
        });
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
