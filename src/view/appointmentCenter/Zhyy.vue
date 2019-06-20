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
                            <el-input suffix-icon="el-icon-arrow-down" v-model="form.areaName" @focus="areaFocus" placeholder="请选择区域"></el-input>
                        </el-form-item>
                        <el-form-item label="" prop="wicketName"  style="width:55%; margin-left: -10%" class="right">
                            <el-input suffix-icon="el-icon-arrow-down" v-model="form.wicketName" @focus="wicketFocus" placeholder="请选择户籍室"></el-input>
                        </el-form-item>        
                    </div>
                    <el-form-item label="预约时间：">
                        <el-input suffix-icon="el-icon-arrow-down" v-model="form.e" @focus='sjFocus' placeholder="请选择"></el-input>
                    </el-form-item>
                    <el-form-item label="预约业务：">
                        <div class="jgWap" style="width: auto">
                            <span class="btns" v-for="(v, i) in ywList" :key="i">{{v}}</span>
                        </div>
                    </el-form-item>
                </el-form>
                <div class="center" style="margin-top: 130px">
                    <span class="btns btns-big btns-blue">立即预约</span>
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
                    <span class="span active"><span class="a">4月25日</span><span class="b">周五</span></span>
                    <span class="span"><span class="a">4月25日</span><span class="b">周五</span></span>
                    <span class="span"><span class="a">4月25日</span><span class="b">周五</span></span>
                    <span class="span"><span class="a">4月25日</span><span class="b">周五</span></span>
                </div>
                <div class="c">
                    <span class="span yes">10:00</span><span class="span on">10:00</span><span class="span yes">10:00</span><span class="span no">10:00</span>
                    <span class="span yes">10:00</span><span class="span on">10:00</span><span class="span yes">10:00</span><span class="span no">10:00</span>
                    <span class="span yes">10:00</span><span class="span on">10:00</span><span class="span yes">10:00</span><span class="span no">10:00</span>
                </div>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey">取消</span>
                <span class="btns btns-big btns-blue left35">确定</span>
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
                c: '',
                d: '',
                e: '',
                f: '',
            },
            areaList: [],
            wicketList: [],
            dataList:[
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
            ],
            ywList: ['身份证业务', '户口业务'],
            sjVisible: false,
            wicketVisible: false,
            areaVisible: false,
            rules: {
                areaName: [
                    {required: true, message: '请选择区域' },
                    
                ],
                wicketName: [
                    {required: true, message: '请选择户籍室' },
                ]
            },
        }
	},
    components: {
        
    },
    methods: {
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
        },
        cancelWicket(){
            const t = this;
            t.wicketVisible = false;
        },


        sjFocus(){
            const t = this;
            t.sjVisible = true;
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
                ywtypeId: '2',
                integer: t.departmentId
            }
            t.$javaService.dayTime(params).then((res)=>{
                
            })
        },
        dayTime(){
            const t = this;
            let params = {
                day: '2019-06-19',
                departmentId: t.departmentId
            }
            t.$javaService.dayTime(params).then((res)=>{

            })
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
        }
    },
    mounted(){
        const t = this;
        t.areaCount()
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
