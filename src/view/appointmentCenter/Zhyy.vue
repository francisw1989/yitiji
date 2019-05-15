<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25 labelColorBlue">
            <div class="pad30">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="160px">
                    <el-form-item label="户籍室：" prop="a">
                        <div style="width:48%" class="left">
                            <el-input suffix-icon="el-icon-arrow-down" v-model="form.a" @focus="hjFocus" placeholder="请选择"></el-input>
                        </div>
                        <div style="width:48%" class="right">
                            <el-input suffix-icon="el-icon-arrow-down" v-model="form.b" @focus="dqFocus" placeholder="请选择"></el-input>
                        </div>                    
                    </el-form-item>
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
        
        <el-dialog width="65%" title="户籍室" top="0" custom-class="modal" center :visible.sync="hjVisible" :show-close="false">
            <div class="jgWap">
                <span @click="selHj(v.name)" :class="'btns ' + v.class " v-for="(v, i) in hjList" :key="i">{{v}}</span>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey">取消</span>
                <span class="btns btns-big btns-blue left35">确定</span>
            </div>
        </el-dialog>
        <el-dialog title="地区" top="0" custom-class="modal" center :visible.sync="dqVisible" :show-close="false">
            <div class="jgWap">
                <span :class="'btns ' + v.class " v-for="(v, i) in dqList" :key="i">{{v}}</span>
            </div>
            <div class="center top40">
                <span class="btns btns-big btns-grey">取消</span>
                <span class="btns btns-big btns-blue left35">确定</span>
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
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
            },
            dataList:[
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
                {date: '4月29日', week: '周五', list: ['09:00','09:00','09:00','09:00','09:00','09:00','09:00']},
            ],
            hjList: ['都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所',],
            dqList: ['都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所','都是怕处所',],
            ywList: ['身份证业务', '户口业务'],
            sjVisible: false,
            hjVisible: false,
            dqVisible: false,
            rules: {
                a: [
                    {required: true, message: '请选择车型' }
                ]
            },
        }
	},
    components: {
        
    },
    methods: {
        hjFocus(){
            const t = this;
            t.hjVisible = true;

        },
        dqFocus(){
            const t = this;
            t.dqVisible = true;

        },
        sjFocus(){
            const t = this;
            t.sjVisible = true;
        }
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
