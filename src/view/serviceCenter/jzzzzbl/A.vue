<template>
    <div class="boxWapAll2 clearfix top25">
        <div style="padding:90px 50px 50px 50px">
            <p class="font24b colblue">请选择申报类别：</p>
            <div class="top90" style="width: 110%">
                <div @click="choosen(i)" :class="'sblbBox clearfix ' + v.active" v-for="(v, i) in m" :key="i">
                    <i :class="'icoAll top60 ' + v.ico "></i>
                    <p class="colblue2 font24b top40">{{v.title}}</p>
                </div>
            </div>
            <div class="center" style="margin-top: 150px;">
                <span class="btns btns-big btns-blue disabled">上一步</span>
                <span class="btns btns-big btns-blue left50">下一步</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "JzzzzblA",
    data() {
        return {
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
        
    },
    methods: {
        choosen(i){
            const t = this;
            for(const v of t.m){
                v.active = ''
            }
            t.m[i].active = 'active';
            t.m = JSON.parse(JSON.stringify(t.m));
        }
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../../style.css";
</style>
