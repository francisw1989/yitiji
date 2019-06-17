<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
  
</template>

<script>
import Header from './view/common/Header';
import Footer from './view/common/Footer';
export default {
    name: "app",
    components: {
        Header,
        Footer
    },
    methods: {
        getDicItems(){
            const t = this;
            // 公安机关 gajgdm
            // 居住处所 jzcs
            // 居住事由 jzsy
            // 婚姻状况 hyzk
            // 文化程度 whcd
            // 政治面貌 zzmm
            // 车型 cx
            let items = ['gajgdm', 'jzcs', 'jzsy', 'hyzk', 'whcd', 'zzmm', 'cx'];
            for(const v of items){
                t.$javaService.dicItems(t, {
                    dicTypeCode: v
                }).then((res)=>{
                    // 公安机关
                    window[v] = res;
                })
            }
        },
        parentmodule(){
            const t = this;
            t.$javaService.parentmodule(t, '0').then((res)=>{
                console.log(res)
            })
        },
        recommend(){
            const t = this;
            t.$javaService.recommend(t, '0').then((res)=>{
                console.log(res)
            })
        }
    },
    mounted(){
        const t = this;
        // if(typeof(SystemCommon)=='undefined'){
        //     this.$alert('未找到终端','',{
        //       showClose: false
        //     });
        //     return;
        // }
        t.getDicItems();
        t.parentmodule();
        t.recommend();
        
        // 关闭键盘
        document.addEventListener('click', (e) => {
            if(e.target.nodeName!='INPUT'){
                t.$systemService.CloseKeyBoard(t)
            }
        }, false);
    }
}
</script>

<style>
</style>
