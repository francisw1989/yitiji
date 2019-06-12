<template>
    <div>
        <div class="boxWapAll1 top25" v-for="(item, index) in menus" :key="index">
            <div class="titWap1 clearfix">
                <i v-if="item.hasMore" @click="showMore(index)" :class="'icoAll ico4 right top10 '+ item.on"></i>
                <i :class="'icoAll top15 ' + item.ico"></i>
                <span class="left5 span top10">{{item.title}}</span>
            </div>
            <div class="clearfix" style="padding: 18px;" @click="OpenTipwizard">
                <router-link :to="cItem.path||'/'" class="cont" v-if="cIndex<4&&!item.showMore || item.showMore" v-for="(cItem, cIndex) in item.children" :key = 'cIndex'>
                    <div class="pad20RL">
                    {{cItem.title}}
                    </div>
                </router-link> 
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    name: "ServiceCenter",
    data() {
        return {
            menus: [
                {
                    title: '治安', 
                    ico: 'ico1',
                    children: [
                        {path: '/serviceCenter/lssfzmkj', title: '临时身份证明开具'},
                        {path: '/serviceCenter/wzjlzmkj', title: '无犯罪记录证明开具'},
                        {path: '/serviceCenter/jzzzzbl', title: '居住证自助办理'},
                        {path: '/serviceCenter/qsgxzmkj', title: '亲属关系证明开具'},
                        {path: '/serviceCenter/zxhkzmkj', title: '注销户口证明开具'},
                        {path: '/serviceCenter/hkdjnrbg', title: '户口登记内容变更更正证明开具'},
                    ]
                },
                {
                    title: '交管', 
                    ico: 'ico2',
                    children: [
                        {path: '/serviceCenter/jtwfcl', title: '交通违法处理与缴费'}
                    ]
                },
                {
                    title: '出入境', 
                    ico: 'ico3',
                    children: [
                        {path: '/serviceCenter/crjjlcx', title: '因私查询出入境记录'},
                        {path: '/serviceCenter/tyblcrj', title: '同意办理出入境证件函打印'},
                        {path: '/serviceCenter/crjzjfy', title: '缴纳出入境证件费用'},
                    ]
                },
                
            ]
        }
	},
    components: {
        
    },
    methods: {
        showMore(i){
            console.log(i)
            const t = this;
            if(t.menus[i].showMore){
                t.menus[i].showMore = false;
                t.menus[i].on = '';
            }else{
                t.menus[i].showMore = true;
                t.menus[i].on = 'on';
            }
            t.$set(t.menus, i, t.menus[i])
        },
        OpenTipwizard(){
            this.$systemService.OpenTipwizard('Setup2')
        }
    },
    mounted(){
        const t = this;
        t.menus.forEach((v, i)=>{
            if(v.children && v.children.length > 4){
                v.hasMore = true;
                t.$set(t.menus, i, v)
            }
        })
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
