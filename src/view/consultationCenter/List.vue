<template>
<div>
    <div class="zxList" style="padding: 35px 28px; ">
        <p class="font24 center lineFenge" v-if='ywtypeId != 9'>{{ywtypeTitle}}</p>
        <p class="font24 center lineFenge" style="border-left: 280px solid #C5D2E8; border-right: 280px solid #C5D2E8;" v-if='ywtypeId == 9'>{{ywtypeTitle}}</p>
        <div class="clearfix top30" v-if="step == 1">
            <div style="height: 500px; overflow: auto">
                <!-- 区域 -->
                <div class="clearfix" style="overflow: hidden">
                    <div style="width: 110%">
                        <span :class="'areaTd ' + v.class " @click="chooseArea(i)" v-for="(v, i) in areaList" :key="i">{{v.areaName}}</span>
                    </div>
                </div>
                <!-- 户籍室 -->
                <div class="clearfix top20" style="overflow: hidden">
                    <div style="width: 110%">
                        <span :class="'hjTd ' + v.class"  @click="chooseWicket(i)" v-for="(v, i) in wicketList" :key="i">{{v.wname}}</span>
                    </div>
                </div>
            </div>
            <div class="center top20">
                <span class="btns btns-big btns-blue" id="btnPrev" @click="prev">返回</span>
            </div>
        </div>
        <!-- <div v-if="step == 2" style="max-height: 550px; overflow: auto;">
            <p @click="showDetail(i)" v-for="(v, i) in ywList" :key="i" class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">{{v.regname}}</span></p>
        </div> -->
        <div v-if="step == 2" class="top30" >
            <div style="height: 500px; overflow: auto">
                <div class="clearfix" style="overflow: hidden">
                    <div style="width: 110%" class="clearfix">
                        <span @click="showDetail(i)" v-for="(v, i) in ywList" :key="i" :class="'ywTd '+ v.class">{{v.regname}}</span>
                    </div>
                </div>
            </div>
            <div class="center top20">
                <span class="btns btns-big btns-blue" id="btnPrev" @click="prev">返回</span>
            </div>
        </div>
        <div v-if="step == 3" class="top30 " >
            <div ref="imageWrapper" class="zxDetailBox">
                
                <p class="center font22">{{registerName}}</p>
                <table class="m-table4 top20">
                    <tr>
                        <td style="width: 150px">
                            <img src="../../assets/c1.png" class="ico" alt="">
                            <span class="left10 verMid">材料准备：</span>
                        </td>
                        <td v-html="info.dealdat"></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="../../assets/c2.png" class="ico" alt="">
                            <span class="left10 verMid">办理期限：</span>
                        </td>
                        <td v-html="info.dealtime"></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="../../assets/c3.png" class="ico" alt="">
                            <span class="left10 verMid">收费标准：</span>
                        </td>
                        <td v-html="info.chargestad"></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="../../assets/c4.png" class="ico" alt="">
                            <span class="left10 verMid">办理地址：</span>
                        </td>
                        <td v-html="info.dealpro"></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="../../assets/c5.png" class="ico" alt="">
                            <span class="left10 verMid">工作时间：</span>
                        </td>
                        <td v-html="info.accepttime"></td>
                    </tr>
                    <tr>
                        <td>
                            <img src="../../assets/c6.png" class="ico" alt="">
                            <span class="left10 verMid">咨询电话：</span>
                        </td>
                        <td>{{wtelphone}}</td>
                    </tr>
                </table>
            </div>
            <div class="center top30">
                <span class="btns btns-big btns-blue" id="btnPrev" @click="prev">返回</span>
                <span class="btns btns-big btns-blue left20" @click="print">打印</span>
            </div>
        </div>
        
    </div>
    <!-- <img :src="dataURL" alt=""> -->
</div>
    
</template>

<script>
import html2canvas from 'html2canvas'
export default {
    name: "ConsultationList",
    data() {
        return {
            wtelphone: '',
            dataURL: '',
            ywtypeId:'',
            step: 1,
            info: {},
            visible: false,
            ywtypeTitle:'',
            title: '常驻快递放假劳动力劳动力',
            list: [],
            ywList: [],
            areaList: [],
            wicketList: [],
        }
	},
    components: {
        
    },
    methods: {
        print(){
            const t = this;
            html2canvas(t.$refs.imageWrapper,{
                backgroundColor: null
            }).then((canvas) => {
                let dataURL = canvas.toDataURL("image/png").split(',')[1];
                t.dataURL = canvas.toDataURL("image/png")
                t.$systemService.PrintImage(t, dataURL);
            });
        },
        prev(){
            const t = this;
            if(t.step==1){
                document.querySelector('.zxTitWap .span.active').click()
                return
            }
            t.step --;
        },
        areaCount(){
            const t = this;
            let params = {
                ywtypeId: t.ywtypeId
            }
            t.$javaService.areaCount(t, params).then((res)=>{
                t.areaList = res;
                t.chooseArea(0)
            })
        },
        chooseArea(i){
            const t = this;
            t.areaId = t.areaList[i].areaId;
            t.areaList.forEach((a, b) => {
                a.class = '';
            });
            t.areaList[i].class = 'active';
            t.areaList = JSON.parse(JSON.stringify(t.areaList));
            t.wicket();
        },
        chooseWicket(i){
            const t = this;
            t.wicketIndex = i;
            t.wicketList.forEach((v, i)=>{
                v.class = '';
            })
            t.wicketList[i].class = 'active';
            t.wicketList = JSON.parse(JSON.stringify(t.wicketList));
            t.wicketId = t.wicketList[i].wicketId;
            t.wtelphone = t.wicketList[i].wtelphone;
            t.step ++;
            t.registerByWicketId();
        },
        registerByWicketId(){
            const t = this;
            let params = {
                wicketId: t.wicketId
            }
            t.$javaService.registerByWicketId(t, params).then((res)=>{
                t.ywList = res;
            })
        },
        register(){
            const t = this;
            let _do = (ywtypeId)=>{
                let params = {
                    ywtypeId: ywtypeId
                }
                t.$javaService.register(t, params).then((res)=>{
                    t.ywList = t.ywList.concat(res);
                })
            }
            if(localStorage.ywtypeId.indexOf(',')>-1){
                // t.ywList = [];
                for(const v of localStorage.ywtypeId.split(',')){
                    _do(v)
                }
                t.step = 2
            }else{
                _do(localStorage.ywtypeId)
            }
            
        },
        wicket(){
            const t = this;
            let params = {
                ywtypeId: t.ywtypeId
            }
            if(t.ywtypeId == 2){
                params.areaId = t.areaId
            }
            t.$javaService.wicket(t, params).then((res)=>{
                t.wicketList = res;
            })
        },
        mdm(){
            const t = this;
            t.visible = false;
            document.querySelectorAll('.zxTitWap .span')[4].click();
        },
        yy(){
            this.$router.push('/appointmentCenter/index');
        },
        showDetail(i){
            const t = this;
            t.info = {};
            t.registerId = t.ywList[i].registerId;
            t.registerName = t.ywList[i].regname;
            t.ywList.forEach((v, i)=>{
                v.class = ''
            })
            t.ywList[i].class = 'active'
            t.ywList = JSON.parse(JSON.stringify(t.ywList))
            t.registerDetail();
            t.step ++;
        },
        
        registerDetail(){
            const t = this;
            let params = {
                registerId: t.registerId
            }
            t.$javaService.registerDetail(t, params).then((res)=>{
                t.info = res;
            })
        },
    },
    
    mounted(){
        const t = this;
        t.ywtypeTitle = localStorage.ywtypeTitle;
        t.ywtypeId = localStorage.ywtypeId;
        // (t.ywtypeId == 11 || t.ywtypeId == 10 || t.ywtypeId == 12 || t.ywtypeId == 36)
        if(t.ywtypeId == 2){
            t.areaCount()
        }else if(t.ywtypeId == 1 || t.ywtypeId.indexOf(',')>-1){
            t.register()
        }else{
            t.wicket();
        }
    }
}
</script>

<style>
@import "../../style.css";
</style>
