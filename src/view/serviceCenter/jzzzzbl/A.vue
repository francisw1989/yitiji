<template>
    <div class="boxWapAll2 clearfix top25" pa>
        <div style="padding-bottom: 50px">
            <div style="padding:90px 50px 0 50px; overglow: hidden" v-if="step==1">
                <p class="font24b colblue">请选择申报类别：</p>
                <div class="top90 center">
                    <div @click="choosen(i)" :class="'sblbBox clearfix ' + v.active" v-for="(v, i) in m" :key="i">
                        <i :class="'icoAll top60 ' + v.ico "></i>
                        <p class="colblue2 font24b top40">{{v.title}}</p>
                    </div>
                </div>
            </div>
            <Jbxxtx v-if='step==2'></Jbxxtx>
            <Dzzl v-if="step==3"></Dzzl>
            <div class="center" style="margin-top: 100px;">
                <span :class="'btns btns-big btns-blue ' + prevDisabled " @click="prev">上一步</span>
                <span :class="'btns btns-big btns-blue left50 ' + nextDisabled " @click="next">{{nextValue}}</span>
            </div>
        </div>
    </div>
</template>

<script>
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
            nextValue: '下一步',
            m: [
                {ico: 'gIco1', title: '出租房屋', active: 'active'},
                {ico: 'gIco2', title: '自有房屋'},
                {ico: 'gIco3', title: '单位内部'},
                {ico: 'gIco4', title: '学校就读'},
                {ico: 'gIco5', title: '亲属房屋'},
            ]
        }
	},
    components: {
        ID,
        Jbxxtx,
        Dzzl
    },
    methods: {
        choosen(i){
            const t = this;
            for(const v of t.m){
                v.active = ''
            }
            t.m[i].active = 'active';
            t.m = JSON.parse(JSON.stringify(t.m));
        },
        next(){
            const t = this;
            t.nextDisabled = '';
            if(t.step == 2){
                t.nextDisabled = 'disabled'
                t.nextValue = '提交'
            }
            if(t.step == 3){
                t.nextDisabled = 'disabled'
                return
            }
            t.step ++ ;
            t.prevDisabled = '';
        },
        prev(){
            const t = this;
            t.prevDisabled = '';
            t.nextValue = '下一步'
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
        document.querySelector('.boxWapAll2').style.height = (document.body.offsetHeight-260)+ 'px'
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
