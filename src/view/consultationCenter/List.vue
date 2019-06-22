<template>
<div>
    <div class="zxList" style="padding: 35px 50px">
        <p class="font24 center" style="padding-bottom: 15px; border-bottom: 1px solid #C9C9C9">{{ywtypeTitle}}（{{list.length}}项）</p>
        <p @click="showDetail(i)" v-for="(v, i) in list" :key="i" class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">{{v.regname}}</span></p>
    </div>
    <el-dialog width="80%" :title="title" top="0" custom-class="modal" left :visible.sync="visible">
        <div class="font20 pad20 col333" style="max-height: 500px; overflow: auto">
            <p class="line40">材料准备：</p>
            <p class=" line40" style="text-indent: 30px;">{{info.chargestad}}</p>
            <p class="line40">办理期限：{{info.dealtime}}</p>
            <p class="line40">收费标准：</p>
            <p class="line40" style="text-indent: 30px;">{{info.chargestad}}</p>
            <!-- 办理地址：二七路与西里路交叉口向东500米路北 西里路46号<br/> -->
            <p class="line40">工作时间：{{info.accepttime}}</p>
                        
        </div>
        <div class="center pad20 top20">
            <span class="btns btns-big btns-blue">面对面咨询</span>
            <span class="btns btns-big btns-blue left40">预约</span>
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
            list: []
        }
	},
    components: {
        
    },
    methods: {
        showDetail(i){
            const t = this;
            t.info = {};
            t.registerId = t.list[i].registerId;
            t.registerDetail();
        },
        register(){
            const t = this;
            let params = {
                ywtypeId: localStorage.ywtypeId
            }
            t.$javaService.register(t, params).then((res)=>{
                t.list = res;
            })
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
        }
    },
    mounted(){
        const t = this;
        t.ywtypeTitle = localStorage.ywtypeTitle;
        t.register()
    }
}
</script>

<style>
@import "../../style.css";
</style>
