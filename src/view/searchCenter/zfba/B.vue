<template>
    <div class="boxWapAll2 top25 relative">
        <div class="jleftArea">
            <span :class="'span ' + v.class" @click="choose($event, i)" v-for='(v, i) in m' :key="i">
                <i :class="'icoAll ' + v.ico"></i>
                <span class="left10">{{v.title}}</span>
            </span>

        </div>
        <div class="jrightArea clearfix" @scroll='scroll($event)'>
            <div class="box" @click="showDetail($event, i)" v-for='(v, i) in list' :key="i">
                <p class="font20 col666">{{v.bt}}</p>
                <p class="top20 col666 font20">{{v.nr}}...</p>
            </div>
        </div>
        <el-dialog :title="chooseTitle" top="0" custom-class="modal" center :visible.sync="visible" >
            <div style="width:1100px; height:550px; overflow: auto; padding: 0 20px" class="font20 col333">
                <div v-if="type==1">
                    <p class="bor_btm_so bold" style="padding-bottom: 15px">概况</p>
                    <p class="top15">{{info.gk}}</p>
                    <p class="bor_btm_so bold top30" style="padding-bottom: 15px">提示</p>
                    <p class="top15">{{info.ts}}</p>
                    <p class="bor_btm_so bold top30" style="padding-bottom: 15px">措施</p>
                    <p class="top15">{{info.cs}}</p>
                    <p class="bor_btm_so bold top30" style="padding-bottom: 15px">安全常识</p>
                    <p class="top15">{{info.aqcs}}</p>
                </div>
                <div v-if="type==2">
                    <p class="bor_btm_so bold" style="padding-bottom: 15px">火灾警情</p>
                    <p class="top15">{{info.hzjq}}</p>
                    <p class="bor_btm_so bold top30" style="padding-bottom: 15px">防火提示</p>
                    <p class="top15">{{info.fhts}}</p>
                </div>
                <div v-if="type==3">
                    <p class="bor_btm_so bold" style="padding-bottom: 15px">拥堵路段</p>
                    <p class="top15">{{info.ydld}}</p>
                    <p class="bor_btm_so bold top30" style="padding-bottom: 15px">事故多发</p>
                    <p class="top15">{{info.sgdf}}</p>
                    <p class="bor_btm_so bold top30" style="padding-bottom: 15px">出行提示</p>
                    <p class="top15">{{info.cxts}}</p>
                </div>
                <div v-if="type==4">
                    <p class="bor_btm_so bold" style="padding-bottom: 15px">{{info.bt}}</p>
                    <p class="top15">{{info.xq}}</p>
                </div>
                <div v-if="type==5">
                    <p><span class="colye">温馨提示：</span>如需发布此类求助，请拨打110报警电话</p>
                    <p class="bor_btm_so bold top50" style="padding-bottom: 15px">{{info.bt}}</p>
                    <p class="top15">{{info.xq}}</p>
                </div>
            </div>
            
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: "ZfbaB",
    data() {
        return {
            page: 1,
            chooseTitle: '',
            type: 1,
            m: [
                {title: '发案情况', ico: 'hIco1'},
                {title: '火灾事故', ico: 'hIco3'},
                {title: '交通秩序', ico: 'hIco2'},
                {title: '公告公示', ico: 'hIco4'},
                {title: '市民求助', ico: 'hIco5'},
            ],
            list: [],
            info: {},
            visible: false,
            finish: true,
            limit: 20
        }
	},
    components: {
        
    },
    methods: {
        scroll(e){
            const t = this;
            let scrollBottom =
            e.target.scrollHeight -
            e.target.scrollTop -
            e.target.clientHeight;
            if (t.finish && scrollBottom < 40) {
                t.page ++ ;
                t.getList();
            }

        },
        getList(){
            const t = this;
            let params = {
                type: t.type,
                page: t.page,
                limit: t.limit
            }
            t.finish = false;
            t.$javaService.jqgkcx(t, params).then((res)=>{
                
                if(res.records.length<t.limit){
                    t.finish = false;
                }else{
                    t.finish = true
                }
                t.list = t.list.concat(res.records);
                
            })
        },
        choose(e, i){
            const t = this;
            t.list = [];
            t.chooseTitle = t.m[i].title;
            if(t.m[i].class == 'active'){
                return
            }
            t.type = i+1;
            t.m.forEach((v, i)=>{
                v.class = ''
            })
            t.m[i].class = 'active';
            t.m = JSON.parse(JSON.stringify(t.m))
            t.getList();
        },
        showDetail(e, i){
            const t = this;
            let params = {
                type: t.type,
                id: t.list[i].id
            }
            t.$javaService.jqgkxqcx(t, params).then((res)=>{
                t.visible = true;
                t.info = res;
            })
        },

    },
    mounted(){
        const t = this;
        t.choose('', 0)
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
