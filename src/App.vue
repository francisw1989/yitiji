<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <img src="./assets/start.png" alt="" @click="hide" id="startImg" style="width: 100%; height: 100%; position: fixed; z-index: 1000000; top:0; left:0;">
    <img v-if="isWh" :src="whImg" alt="" style="width: 100%; height: 100%; position: fixed; z-index: 1000000; top:0; left:0;">
    <el-dialog :close-on-click-modal='false' :close-on-press-escape='false' title="温馨提示" top="0" custom-class="modal" center :visible.sync="tsVisible" :show-close="false">
        <div class="font18 center" style="padding: 20px 0; min-width: 400px;" >
            <img src="./assets/1.gif" alt=""><span class="left10">{{text}}</span><span v-if="tsTime>0">{{tsTime}}</span>
        </div>
    </el-dialog>
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
    data(){
        return {
            isWh: false,
            whImg: '',
            _djsTime: 0,
            tsVisible: false,
            tsTime: 90,
            text: '业务办理中，请耐心等待……'
        }
    },
    methods: {
        tsTimeDo(msg){
            const t = this;
            t.tsTime = 90;
            if(msg){
                t.text = msg
            }else{
                t.text = '业务办理中，请耐心等待……';
            }
            t.tsVisible = true;
            window.tsTimeInte = setInterval(()=>{
                if(t.tsTime<=1){
                    t.text = '处理失败……';
                    clearInterval(tsTimeInte)
                    setTimeout(()=>{
                        t.closeTs();
                    },3000)
                }
                t.tsTime --;
            }, 1000)
        },
        closeTs(){
            const t = this;
            clearInterval(tsTimeInte);
            t.tsVisible = false;
        },
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
        djs(){
            const t = this;
            window.djsInter = setInterval(()=>{
                if(t._djsTime<=0){
                    // clearInterval(window.djsInter);
                    // document.querySelector('#startImg').style.display = 'block';
                    window.location.href = '/';
                    window.closeSys();
                }
                t._djsTime --;
            }, 1000)
        },
        config(){
            const t = this;
            let _do = ()=>{
                t.$javaService.config(t).then((res)=>{
                    window.config = res;
                    document.title = window.config.filter((v)=>{
                        return v.id == 1
                    })[0].settingValue;
                    window.DJSTime = window.config.filter((v)=>{
                        return v.id == 5
                    })[0].settingValue;
                    t._djsTime = window.DJSTime;
                    let whStatus = window.config.filter((v)=>{
                        return v.id == 7
                    })[0].settingValue;
                    if(whStatus == 1){
                        t.isWh = true
                    }else{
                        t.isWh = false
                    }
                    t.whImg = window.config.filter((v)=>{
                        return v.id == 10
                    })[0].settingValue;
                });
            }
            // let configInte = setInterval(() => {
            //     _do();
            // }, 60000);
            _do();
        },
        hide(e){
            const t = this;
            e.target.style.display = 'none';
            t.$systemService.OpenTipwizard(t, '000000')
            t.djs()
        }
    },
    mounted(){
        const t = this;
        window.tsTimeDo = ()=>{
            t.tsTimeDo();
        };
        window.closeTs = ()=>{
            t.closeTs();
        };
        t.$systemService.CloseTipwizard();

        // if(typeof(SystemCommon)=='undefined'){
        //     this.$alert('未找到终端','',{
        //       showClose: false
        //     });
        //     return;
        // }
        t.getDicItems();
        t.parentmodule();
        t.config();
        
        // document 点击
        document.addEventListener('click', (e) => {
            if(typeof(window.djsInter)=='number'){
                t._djsTime = window.DJSTime
            }
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
        window.MouseClick =(str)=> {
            if(str){
                t._djsTime = window.DJSTime
                
            }
        }
    }
}
</script>

<style>
</style>
