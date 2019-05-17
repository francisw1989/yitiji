<template>
<div>
    <div class="zxList" style="padding: 35px 50px">
        <p class="font24 center" style="padding-bottom: 15px; border-bottom: 1px solid #C9C9C9">户政服务（8项）</p>
        <p @click="showDetail" class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">常驻快递放假劳动力劳动力</span></p>
        <p class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">常驻快递放假劳动力劳动力</span></p>
        <p class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">常驻快递放假劳动力劳动力</span></p>
        <p class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">常驻快递放假劳动力劳动力</span></p>
        <p class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">常驻快递放假劳动力劳动力</span></p>
        <p class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">常驻快递放假劳动力劳动力</span></p>
        <p class="top30 clearfix font24"><span class="dian1"></span><span class="verMid left20">常驻快递放假劳动力劳动力</span></p>
    </div>
    <el-dialog width="80%" :title="title" top="0" custom-class="modal" left :visible.sync="visible">
        <div class="font20 pad20" style="max-height: 500px; overflow: auto">
                            材料准备：<br/>
　　1、首次申领：凭居民户口簿原件。<br/>
　　2、换领：凭居民户口簿原件、居民身份证原件。<br/>
　　3、丢失补领：凭居民户口簿原件。<br/>
　　4、未满十六周岁，由监护人带领本人到现场申请办理。<br/>
办理期限：40日<br/>
收费标准：<br/>
　　首次申领的，不收费；换领居民身份证的，工本费每证20元；损坏换领、丢失补领居民身份证的，工本费每证40元。<br/>
办理地址：二七路与西里路交叉口向东500米路北 西里路46号<br/>
工作时间：9:00－12:00，13:00－17:00（国家法定工作日）
                        
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
            visible: false,
            title: '常驻快递放假劳动力劳动力'
        }
	},
    components: {
        
    },
    methods: {
        showDetail(){
            const t = this;
            t.visible = true;
        }
    },
    mounted(){
        const t = this;
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
