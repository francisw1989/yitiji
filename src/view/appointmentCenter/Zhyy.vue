<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25 labelColorBlue">
            <div class="pad30">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="160px">
                    <div class="clearfix">
                        <el-form-item label="户籍室：" prop="areaName" style="width:55%" class="left">
                            <el-input readonly suffix-icon="el-icon-arrow-down" v-model="form.areaName" @focus="areaFocus" placeholder="请选择区域"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="wicketName"  style="width:55%; margin-left: -10%" class="right">
                            <el-input readonly suffix-icon="el-icon-arrow-down" v-model="form.wicketName" @focus="wicketFocus" placeholder="请选择户籍室"></el-input>
                        </el-form-item>        
                    </div>
                    <el-form-item v-if="wtelphone" label="" prop="">
                        <p class="font20">联系电话：{{wtelphone}}</p>
                        <p class="font20 top10">大厅地址：{{wadress}}</p>
                    </el-form-item>
                    <el-form-item label="预约时间：" prop="time">
                        <el-input readonly="" suffix-icon="el-icon-arrow-down" v-model="form.time" @focus='sjFocus' placeholder="请选择预约时间"></el-input>
                    </el-form-item>
                    <el-form-item label="预约业务：">
                        <div class="jgWap" style="width: auto">
                            <span :class="'btns ' + v.class" v-for="(v, i) in ywList" @click="ywChoose(i)" :key="i">{{v.regname}}</span>
                        </div>
                    </el-form-item>
                </el-form>
                <div class="center" style="margin-top: 130px">
                    <span class="btns btns-big btns-blue" @click="onSubmit('form')">立即预约</span>
                </div>
            </div>
        </div>
        
        <el-dialog width="65%" title="地区" top="0" custom-class="modal" center :visible.sync="areaVisible" :show-close="false">
            <div class="jgWap">
                <span @click="selArea(i)" :class="'btns ' + v.class " v-for="(v, i) in areaList" :key="i">{{v.areaName}}</span>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey" @click="cancelArea">取消</span>
                <span class="btns btns-big btns-blue left35" @click="chooseArea">确定</span>
            </div>
        </el-dialog>
        <el-dialog title="户籍" top="0" custom-class="modal" center :visible.sync="wicketVisible" :show-close="false">
            <div class="jgWap">
                <span :class="'btns ' + v.class " v-for="(v, i) in wicketList" @click="selWicket(i)" :key="i">{{v.wname}}</span>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey" @click="cancelWicket">取消</span>
                <span class="btns btns-big btns-blue left35" @click="chooseWicket">确定</span>
            </div>
        </el-dialog>
        <el-dialog  title="预约时间" top="0" custom-class="modal" center :visible.sync="sjVisible" :show-close="false">
            <div class="yysjWap">
                <div class="h clearfix">
                    <span v-for="(v, i) in dayList" @click="dayChoose(i)" :key="i" :class="'span ' + v.class"><span class="a">{{v.time_str_show}}</span><span class="b">{{v.time_date}}</span></span>
                </div>
                <div class="c">
                    <div v-if="!timeList.length" class="clearfix">
                        <p class="center colblue font24 top70">
                            <i class="icoAll iIco3"></i>
                            <span class="verMid left10">没有可预约时段，请选择其他日期！</span>
                        </p>
                    </div>
                    <div v-if="timeList.length">
                        <span :class="'span ' + v.class " v-for="(v, i) in timeList" @click="timeChoose(i)" :key='i'>{{v.time}}</span>
                    </div>
                    
                </div>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey" @click="timeCancel">取消</span>
                <span class="btns btns-big btns-blue left35" @click="timeSub">确定</span>
            </div>
        </el-dialog>
        <el-dialog title="出入境预约" top="0" custom-class="modal" center :visible.sync="yySuccessVisible" :show-close="false">
            <div class="pad30" style="padding: 30px 400px 0px 60px">
                <p class="font24 colblue"><span class="bold">户籍室:</span> {{form.areaName}}{{form.wicketName}}</p>
                <p class="font24 colblue top20"><span class="bold">预约时间:</span> {{form.time}}</p>
                <p class="font24 colblue top20"><span class="bold">预约业务:</span> {{remark}}</p>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey" @click="do1">取消</span>
                <span class="btns btns-big btns-blue left35" @click="do2">确定</span>
            </div>
        </el-dialog>
    </div>
</template>

<script>

export default {
    name: "MyAppointment",
    data() {
        return {
            form: {
                areaName: '',
                wicketName: '',
                time: '',
                d: '',
                e: '',
                f: '',
            },
            yySuccessVisible: false,
            wtelphone:'',
            wadress:'',
            areaList: [],
            wicketList: [],
            timeList:[
                // {time: '09:00'},{time: '09:30'},{time: '10:00'},{time: '10:30'},{time: '11:00'},{time: '11:30'},{time: '14:00'},{time: '14:30'},{time: '15:00'},{time: '15:30'},{time: '16:00'},{time: '16:30'}
            ],
            dayList:[
            ],
            ywList: [],
            sjVisible: false,
            wicketVisible: false,
            areaVisible: false,
            rules: {
                areaName: [
                    {required: true, message: '请选择区域' },
                    
                ],
                wicketName: [
                    {required: true, message: '请选择户籍室' },
                ],
                time: [
                    {required: true, message: '请选择时间' },
                ],
            },
        }
	},
    components: {
        
    },
    methods: {
        do1(){
            const t = this;
            t.yySuccessVisible = false;
        },
        do2(){
            const t = this;
            t.yySuccessVisible = false;
            window.location.href = '/'
        },
        areaFocus(){
            const t = this;
            t.areaVisible = true;
        },
        selArea(i){
            const t = this;
            t.areaIndex = i;
            t.areaList.forEach((v, i)=>{
                v.class = '';
            })
            t.areaList[i].class = 'active';
            t.areaList = JSON.parse(JSON.stringify(t.areaList));
        },
        cancelArea(){
            const t = this;
            t.areaVisible = false;
        },
        chooseArea(){
            const t = this;
            t.form.areaName = t.areaList[t.areaIndex].areaName;
            t.areaId = t.areaList[t.areaIndex].areaId;
            t.areaVisible = false;
            t.wicket();
        },
        wicketFocus(){
            const t = this;
            if(!t.areaId){
                this.$message({
                    message: '请先选择区域',
                    type: 'warning'
                });
                return
            }
            t.wicketVisible = true;
        },
        selWicket(i){
            const t = this;
            t.wicketIndex = i;
            t.wicketList.forEach((v, i)=>{
                v.class = '';
            })
            t.wicketList[i].class = 'active';
            t.wicketList = JSON.parse(JSON.stringify(t.wicketList));

        },
        chooseWicket(){
            const t = this;
            t.form.wicketName = t.wicketList[t.wicketIndex].wname;
            t.wicketId = t.wicketList[t.wicketIndex].wicketId;
            t.wicketVisible = false;
            t.wtelphone = t.wicketList[t.wicketIndex].wtelphone;
            t.wadress = t.wicketList[t.wicketIndex].wadress;

            t.registerByWicketId();
        },
        cancelWicket(){
            const t = this;
            t.wicketVisible = false;
        },
        sjFocus(){
            const t = this;
            if(!t.wicketId){
                this.$message({
                    message: '请先选择户籍室',
                    type: 'warning'
                });
                return
            }
            t.timeList = [];
            t.sjVisible = true;
            t.dayChoose(0);
        },
        wicket(){
            const t = this;
            let params = {
                ywtypeId: '2',
                areaId: t.areaId
            }
            t.$javaService.wicket(t, params).then((res)=>{
                t.wicketList = res;
            })
        },
        registerByWicketId(){
            const t = this;
            let params = {
                wicketId: t.wicketId
            }
            t.$javaService.registerByWicketId(t, params).then((res)=>{
                t.ywList = res;
            })
        },
        ywChoose(i){
            const t = this;
            for(const v of t.ywList){
                v.class = ''
            }
            t.ywListIndex = i;
            t.ywList[i].class='active';
            t.ywList = JSON.parse(JSON.stringify(t.ywList));
            t.registerId = t.ywList[i].registerId;
            t.remark = t.ywList[i].regname;
        },
        getDayList(){
            const t = this;
            let dayInte = setInterval(()=>{
                if(typeof(getNextDays)=='function'){
                    clearInterval(dayInte);
                    t.dayList = getNextDays(4);
                }
            })
        },
        dayChoose(i){
            const t = this;
            for(const v of t.dayList){
                v.class = ''
            }
            t.dayList[i].class = 'active';
            t.dayList = JSON.parse(JSON.stringify(t.dayList));
            t.dayIndex = i;
            t.day = t.dayList[i].time_str;
            t.dayTime();
        },
        dayTime(){
            const t = this;
            let params = {
                day: t.day,
                departmentId: t.wicketId
            }
            t.$javaService.dayTime(t, params).then((res)=>{
                // let _timeList = res.map((v)=>{
                //     return v.time
                // })
                // t.timeList.forEach((v, i)=>{
                //     let index = _timeList.indexOf(v.time)
                //     if(index>-1){
                //         v.status = res[index].status;
                //         if(res[index].status==0){
                //             v.class = 'yes';
                //         }else{
                //             v.class = 'no';
                //         }
                //     }else{
                //         v.class = 'no';
                //     }
                // })
                res.forEach((v, i)=>{
                    if(v.status==0){
                        v.class = 'yes';
                    }else{
                        v.class = 'no';
                    }
                })
                t.timeList = res
            },()=>{
                // t.timeList.forEach((v, i)=>{
                //     v.class = 'no'
                // })
                // t.timeList = JSON.parse(JSON.stringify(t.timeList))
                t.timeList = [];
            })
        },
        timeChoose(i){
            const t = this;
            
            if(t.timeList[i].status == 0){
                for(const v of t.timeList){
                    if(v.class.indexOf('no')>-1){
                        v.class = 'no'
                    }else{
                        v.class = 'yes';
                    }
                }
                t.timeIndex = i;
                t.timeList[i].class = 'yes on';
                t.timeList = JSON.parse(JSON.stringify(t.timeList))
            }else{
                this.$message({
                    message: '请选择其他时间段',
                    type: 'warning'
                });
            }
        },
        timeSub(){
            const t = this;
            t.sjVisible = false;
            t.form.time = t.day +' '+ t.timeList[t.timeIndex].time;
        },
        timeCancel(){
            const t = this;
            t.sjVisible = false;
        },
        registerDetail(){
            const t = this;
            let params = {
                integer: ''
            }
            t.$javaService.registerDetail(t, params).then((res)=>{

            })
        },
        areaCount(){
            const t = this;
            let params = {
                ywtypeId: '2'
            }
            t.$javaService.areaCount(t, params).then((res)=>{
                t.areaList = res;
            })
        },
        sub(){
            const t = this;
            let info;
            if(localStorage.IDCardBase64){
                info = JSON.parse(localStorage.IDCardBase64)
            }else{
                info = window.IDCardBase64
            }
            if(!t.registerId){
                this.$message({
                    message: '请选择预约业务',
                    type: 'warning'
                });
                return;
            }
            let params = {
                cardid: info.sIDNo,
                day: t.day,
                departmentId: t.wicketId,
                time: t.timeList[t.timeIndex].time,
                itemId: t.registerId,
                uname: info.sName
            };
            t.$javaService.getOrder(t, params).then((res)=>{
                t.yySuccessVisible = true;
                // t.$alert('预约成功','',{
                //     showClose: false
                // }).then(()=>{
                //     this.$router.push('/appointmentCenter/myAppointment');
                    
                // });
            },(res)=>{
                t.$alert('您已预约','',{
                    showClose: false
                }).then(()=>{
                    // this.$router.push('/appointmentCenter/myAppointment');
                    
                });
            })
        },
        onSubmit(formName){
            const t = this;
            t.$refs[formName].validate((valid) => {
                if (valid) {
                    t.sub()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    mounted(){
        const t = this;
        t.areaCount();
        t.getDayList();
    }
}
</script>

<style>
@import "../../style.css";
</style>
