<template>
<div>
    <div class="zxList" style="padding: 35px 28px; ">
        <p class="font24 center">{{ywtypeTitle}}</p>
        <div class="clearfix top30">
            <!-- 区域 -->
            <div class="clearfix">
                <span class="areaTd" @click="chooseArea(v, i)" v-for="(v, i) in areaList" :key="i">{{v.areaName}}</span>
            </div>
            <!-- 户籍室 -->
            <div class="clearfix">
                <span class="hjTd" v-for="(v, i) in areaList" :key="i">{{v.areaName}}</span>
            </div>
            <div class="center top20">
                <span class="btns btns-big btns-blue">返回</span>
            </div>
        </div>
        <div style="max-height: 550px; overflow: auto; display: none;">
            <p @click="showDetail(i)" v-for="(v, i) in list" :key="i" class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">{{v.regname}}</span></p>
        </div>
        
    </div>
    <el-dialog width="80%" :title="title" top="0" custom-class="modal" left :visible.sync="visible">
        <div class="font20 pad20 col333" style="max-height: 500px; overflow: auto">
            <p class="line40">材料准备：</p>
            <p class="line40 left30" v-html="info.chargestad"></p>
            <p class="line40">办理期限：</p>
            <p class="line40 left30"><span v-html="info.dealtime"></span></p>
            <p class="line40">收费标准：</p>
            <p class="line40 left30" v-html="info.chargestad"></p>
            <!-- 办理地址：二七路与西里路交叉口向东500米路北 西里路46号<br/> -->
            <p class="line40">工作时间：</p>
            <p class="line40 left30"><span v-html="info.accepttime"></span></p>
                        
        </div>
        <div class="center pad20 top20">
            <span class="btns btns-big btns-blue" @click="mdm">面对面咨询</span>
            <span class="btns btns-big btns-blue left40" @click="yy">预约</span>
        </div>
        
    </el-dialog>
</div>
    
</template>

<script>
export default {
    name: "ConsultationList",
    data() {
        return {
            info: {},
            visible: false,
            ywtypeTitle:'',
            title: '常驻快递放假劳动力劳动力',
            list: [],
            areaList: [],
            wicketList: [],
        }
	},
    components: {
        
    },
    methods: {
        areaCount(){
            const t = this;
            let params = {
                ywtypeId: t.ywtypeId
            }
            t.$javaService.areaCount(t, params).then((res)=>{
                t.areaList = res;
            })
        },
        chooseArea(v, i){
            const t = this;
            t.areaId = v.areaId;
            t.areaList.forEach((a, b) => {
                a.class = '';
            });
            t.areaList[i].class = 'active';
            t.areaList = JSON.parse(JSON.stringify(t.areaList));
            t.wicket();
        },
        wicket(){
            const t = this;
            let params = {
                ywtypeId: t.ywtypeId,
                areaId: t.areaId
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
            t.registerId = t.list[i].registerId;
            t.registerDetail();
        },
        register(){
            const t = this;
            let _do = (ywtypeId)=>{
                let params = {
                    ywtypeId: ywtypeId
                }
                t.$javaService.register(t, params).then((res)=>{
                    t.list = t.list.concat(res);
                })
            }
            if(localStorage.ywtypeId.indexOf(',')){
                for(const v of localStorage.ywtypeId.split(',')){
                    _do(v)
                }
            }else{
                _do(localStorage.ywtypeId)
            }
            
        },
        registerDetail(){
            const t = this;
            let params = {
                registerId: t.registerId
            }
            t.$javaService.registerDetail(t, params).then((res)=>{
                t.info = res;
                t.visible = true;
            })
        },
    },
    
    mounted(){
        const t = this;
        t.ywtypeTitle = localStorage.ywtypeTitle;
        t.ywtypeId = localStorage.ywtypeId;
        t.register();
        if(localStorage.ywtypeId == 2){
            t.areaCount()
        }
    }
}
</script>

<style>
@import "../../style.css";
</style>
