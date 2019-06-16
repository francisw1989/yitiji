<template>
    <div class="modal1">
        <div style="padding-bottom: 60px" class="leftArea clearfix relative">
            <div class="cont">
                <div v-for="(v, i) in dzcl" :key="i">
                    <div class="liWap top10" v-for="(a, b) in v.dzcldata" :key="b">
                        <div :class="'li ' + a.class" @click="imgChose(i, b)"></div>
                        <p class=" colblue font20">{{v.title}}</p>
                    </div>
                </div>
                
            </div>
            <div class="btnsWap center">
                <span class="btns btns-big btns-blue" @click="sub">确定</span>    
            </div>
            

        </div>
        <div class="rightArea">
            <div class="cont">
                <div class="imgWap">
                    <img :src="'data:image/png;base64,'+src" alt="">
                </div>
            </div>
            <div class="center top35">
                <span v-if="showRePaishe" class="btns btns-big btns-grey" @click="repaishe">重新拍摄</span>
                <span v-if="!showRePaishe" class="btns btns-big btns-blue" @click="paishe">拍摄</span>
                <span class="btns btns-big btns-grey left20" @click="cancel">取消</span>
            </div>
        </div>
    </div>
    
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "Photoshot",
    data() {
        return {
            dzcl: [],
            showRePaishe: false,
            src: '',
            photoIndex: 0
        }
	},
    components: {
        
    },
    methods: {
        cancel(){
            
            emit.$emit('finishPhotoshot',{
                finishPhotoshot: true
            })
        },
        imgChose(a, b){
            const t = this;
            t.index1 = a;
            t.index2 = b;
            for(const v of t.dzcl){
                for(const a of v.dzcldata){
                    a.class = '';
                }
            }
            t.dzcl[a].dzcldata[b].class = 'active';
            t.dzcl = JSON.parse(JSON.stringify(t.dzcl));
            if(t.dzcl[a].dzcldata[b].base64DATA){
                t.showRePaishe = true;
                t.src = t.dzcl[a].dzcldata[b].base64DATA;
            }else{
                t.repaishe();
            }
        },
        HPAOpenWindows(){
            const t = this;
            t.$systemService.HPAOpenWindows(t).then((res)=>{
                t.$systemService.LightUp(t)
                t.$systemService.HPAOpenVideo(t)
            })
        },
        initBaseData(res){
            const t = this;
            t.src = res;
            t.showRePaishe = true;
            t.dzcl[t.index1].dzcldata[t.index2].base64DATA = res;
            t.dzcl = JSON.parse(JSON.stringify(t.dzcl));
            // 关闭高拍仪窗口
            t.$systemService.HPACloseWindows()
            // 关灯
            t.$systemService.LightOff()
            console.log(res);
        },
        paishe(){
            const t = this;
            t.$systemService.HPATakePhoto(t).then((res)=>{
                t.initBaseData(res)
            })
        },
        repaishe(){
            const t = this;
            t.showRePaishe = false;
            t.src = '';
            t.HPAOpenWindows();
        },
        validate(){
            const t = this
            let msg = '';
            // 出租房屋
            for(const v of t.dzcl){
                if(v.dzcllx == '00'){
                    // 申报人身份证
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<2){
                        msg = '请上传申报人身份证'
                        break
                    }
                }
                if(v.dzcllx == '01'){
                    // 租房合同/出租房屋备案证明：
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<1){
                        msg = '请上传租房合同/出租房屋备案证明'
                        break
                    }
                }
                if(v.dzcllx == '02'){
                    // 房主身份证复印件
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<1){
                        msg = '请上传房主身份证复印件'
                        break
                    }
                }
                if(v.dzcllx == '03'){
                    // 房产证/购房合同、发票：
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<1){
                        msg = '请上传房产证/购房合同、发票'
                        break
                    }
                }
                if(v.dzcllx == '05'){
                    // 关系证明
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<2){
                        msg = '请上传关系证明'
                        break
                    }
                }
                if(v.dzcllx == '06'){
                    // 学生证
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<2){
                        msg = '请上传学生证'
                        break
                    }
                }
                if(v.dzcllx == '07'){
                    // 劳动合同/劳动关系证明
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<1){
                        msg = '请上传劳动合同/劳动关系证明'
                        break
                    }
                }
                if(v.dzcllx == '08'){
                    // 住宿证明
                    let list = v.dzcldata.filter((v, i)=>{
                        return v.base64DATA !=''
                    })
                    if(list.length<1){
                        msg = '请上传住宿证明'
                        break
                    }
                }                
            }
            if(msg){
                t.$message({
                    message: msg,
                    type: 'warning'
                });
                return false
            }else{
                return true
            }
        },
        sub(){
            const t = this;
            let msg = '';
            // 申报人身份证
            // if(t.photoList.filter((v, i)=>{return v.dzcllx == '00' && v.base64DATA}).length<2){
            //     msg = '请上传'
            // }
            let validate = t.validate();
            if(!validate){
                return
            }
            
            emit.$emit('finishPhotoshot',{
                finishPhotoshot: true,
                dzcl: t.dzcl
            })
            
        }
    },
    mounted(){
        const t = this;
        t.dzcl = JSON.parse(JSON.stringify(window.dzcl));
        setTimeout(()=>{
            t.imgChose(window.imgI, window.imgB)
        },0)
    }
}
</script>

<style>
@import "../../style.css";
</style>
