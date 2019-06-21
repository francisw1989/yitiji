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
            t.$javaService.types(t).then((res)=>{
                // 公安机关 gajgdm
                // 居住处所 jzcs
                // 居住事由 jzsy
                // 婚姻状况 hyzk
                // 文化程度 whcd
                // 政治面貌 zzmm
                // 车型 cx
                let items = res.map((v) => {
                    return v.typeCode
                });
                for(const v of items){
                    t.$javaService.dicItems(t, {
                        dicTypeCode: v
                    }).then((res)=>{
                        // 公安机关
                        window[v] = res;
                    })
                }
                
            })
            
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
        window.getNextDays = (length)=>{
            var date_arr = [];
            //days 获取多少天的数据的数据
            var d = new Date().getDay();//获取今天星期几
            if(d==0){
                d=7
            };
            function afterDate(days){
                for (let i = 0; i < length; i++) {
                    let Stamp = new Date();
                    let number;
                    if (Stamp.getDay() == 0) {
                        number = 7;
                    } else {
                        number = Stamp.getDay();
                    }
                    let num = i;
                    Stamp.setDate(Stamp.getDate() + num);
                    let year = Stamp.getFullYear();
                    let month = Stamp.getMonth() + 1;
                    let date = Stamp.getDate();
                    var obj={};
                    if (month < 10) {
                        month = `0${month}`;//这里使用的反引号
                    }
                    if (date < 10) {
                        obj.time_str =`${year}-${month}-0${date}`;
                    } else {
                        obj.time_str =`${year}-${month}-${date}`;
                    }
                    obj.time_str_show =`${month}月${date}日`;
                    obj.time_date = `周${'日一二三四五六'.charAt(new Date(obj.time_str).getDay())}`
                    date_arr.push(obj)
                }

            }
            //获取今天到下周日的天数
            var days =7-d+1+7;
            afterDate(days);
            return date_arr;
        }
    }
}
</script>

<style>
</style>
