<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25" style="padding: 20px 30px">
            <div class="cxCont cxCont2 clearfix" v-for="(v, i) in m" :key="i" @click="show(v)">
                <i class="top40 icoAll" :style="'background-image:url('+v.iconUrl+')'"></i>
                <p class="top30">{{v.moduleName}}</p>
            </div>
        </div>
        <el-dialog width="65%" :title="title" top="0" custom-class="modal" left :visible.sync="visible">

            <div class="center top20 clearfix" style="padding-bottom: 50px">
                <div class="ewmWap" style="margin-top:60px;">
                    <img src="../../assets/img11.png" alt="">
                </div>
                <p class="font24 top30">扫描二维码，{{title}}</p>
            </div>
        </el-dialog>
        
    </div>
</template>

<script>

export default {
    name: "ReportCenter",
    data() {
        return {
            m:[
                {ico: 'eIco1', title: '交通有奖随手拍'},
                {ico: 'eIco2', title: '扫黑除恶有奖举报'},
                {ico: 'eIco3', title: '涉外举报'},
                {ico: 'eIco4', title: '涉毒举报'},
                {ico: 'eIco5', title: '涉黄涉赌举报'},
            ],
            title: '',
            visible: false,
            moduleContent: ''
        }
	},
    components: {
        
    },
    methods: {
        show(v){
            const t = this;
            t.visible = true;
            t.title = v.moduleName;
            t.moduleContent = v.moduleType;
        },
        initMenu(){
            const t = this;
            let dosetInt = setInterval(()=>{
                if(window.menus){
                    clearInterval(dosetInt);
                    t.m = window.menus.filter((v)=>{
                        return v.moduleCode == '005'
                    })[0].moduleList;
                    console.log(t.m)
                }
                
            },100)
        },
    },
    mounted(){
        const t = this;
        t.initMenu()
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
