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
                res = res.filter((v, i)=>{
                    
                    return v.isShow != 0;
                })
                res.forEach((v, i) => {
                    if(i==0){
                        v.class = 'b b1'
                        v.style = {backgroundPosition: '28px 24px'}
                    }
                    if(i==1){
                        v.class = 'b b1'
                        v.style = {backgroundPosition: '24px 24px'}
                    }
                    if(i==2){
                        v.class = 'b b1'
                        v.style = {backgroundPosition: '20px 24px'}
                    }
                    if(i==3){
                        v.class = 'b b2'
                        v.style = {backgroundPosition: '0px 24px'}
                    }
                    if(i==4){
                        v.class = 'b b2'
                        v.style = {backgroundPosition: '-4px 24px'}
                    }
                    if(i==5){
                        v.class = 'b b2'
                        v.style = {backgroundPosition: '-8px 24px'}
                    }
                });
                
                window.menus = res;
            })
        },
        
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
