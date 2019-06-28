<template>
    <div>
        <div class="boxWapAll1 top25" v-for="(item, index) in menus" :key="index">
            <div class="titWap1 clearfix">
                <div class=" top10"><i :class="'icoAll ' +item.ico  "></i><span class="left5 span">{{item.title}}</span></div>
            </div>
            <div class="clearfix" style="padding: 18px;">
                <div @click="nav($event, cItem)" class="cont" v-for="(cItem, cIndex) in item.children" :key = 'cIndex'>
                    <div class="pad20RL">
                    {{cItem.moduleName}}
                    </div>
                </div> 
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
                        // {path: '/serviceCenter/qsgxzmkj', title: '亲属关系证明开具'},
                        // {path: '/serviceCenter/zxhkzmkj', title: '注销户口证明开具'},
                        // {path: '/serviceCenter/hkdjnrbg', title: '户口登记内容变更更正证明开具'},
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
        // showMore(i){
        //     console.log(i)
        //     const t = this;
        //     if(t.menus[i].showMore){
        //         t.menus[i].showMore = false;
        //         t.menus[i].on = '';
        //     }else{
        //         t.menus[i].showMore = true;
        //         t.menus[i].on = 'on';
        //     }
        //     t.$set(t.menus, i, t.menus[i])
        // },
        nav(e, v){
            const t = this;
            // 未上线处理
            localStorage.wsxTitle = v.moduleName;
            if(v.isOnline==0){
                t.$router.push('/wsx');
                return;
            }
            
            localStorage.moduleId = v.id;
            localStorage.beforePath = v.moduleContent;
            localStorage.beforeType = v.moduleType;
            if(v.moduleCode && v.tipsUrl){
                this.$systemService.OpenTipwizard(t, v.moduleCode)
            }
            if(v.moduleContent.indexOf('lssfzmkj')>-1||v.moduleContent.indexOf('jzzzzbl')>-1){
                t.$router.push(v.moduleContent)
                return
            }
            t.$router.push('/idWap');
            
        },
        initMenu(){
            const t = this;
            let dosetInt = setInterval(()=>{
                if(window.menus){
                    clearInterval(dosetInt);
                    let sMenu = window.menus.filter((v)=>{
                        return v.moduleCode == '001'
                    })[0];
                    
                    t.menus[0].children = sMenu.moduleList.filter((v)=>{
                        return v.belongAllocatePolice == 4
                    })
                    t.menus[1].children = sMenu.moduleList.filter((v)=>{
                        return v.belongAllocatePolice == 2
                    })
                    t.menus[2].children = sMenu.moduleList.filter((v)=>{
                        return v.belongAllocatePolice == 3
                    })
                }
            },100)
        }
    },
    mounted(){
        const t = this;
        t.initMenu();
        
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
