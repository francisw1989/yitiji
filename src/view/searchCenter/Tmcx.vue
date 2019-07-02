<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="" style="padding: 50px 60px">
                <el-form label-position="right" :model="form" ref="form" :rules="rules" label-width="150px">
                    <div class="clearfix">
                        <el-form-item label="选择城市：" prop="orgId" class="left" style="width:49%;">
                            <el-select v-model="form.orgId" @change="cityChoose" placeholder="请选择城市" style="width: 100%">
                                <el-option :label="v.orgName" :value="v.orgId" v-for="(v, i) in cityList" :key="i"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="选择县区：" prop="orgId2" class="left" style="width:49%;">
                            <el-select v-model="form.orgId2" @change="areaChoose" placeholder="请选择城市" style="width: 100%">
                                <el-option :label="v.orgName" :value="v.orgId" v-for="(v, i) in areaList" :key="i"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="clearfix">
                        <el-form-item label="查询姓名：" prop="name" class="left" style="width:49%;">
                            <el-input v-model="form.name" placeholder="请输入姓名" @focus="inputFocus($event, 0)"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
                <div class="center top50">
                    <span class="btns btns-big btns-blue"  @click="onSubmit('form')">查询</span>
                </div>
                <div class="top60">
                    <p class="colblue font24" style="padding-bottom: 15px; border-bottom: 1px solid #1755B1">查询结果</p>
                </div>
                <div class="top25" v-if="num == 0 || num">
                    <table>
                        <tr>
                            <td style="width: 202px">
                                <div class="jgBox1 clearfix">
                                    <p style="font-size: 48px;" class="colblue top10">{{num}}</p>
                                    <p class="colblue font22 top10">重名人数</p>
                                </div>
                            </td>
                            <td>
                                <div class="jgBox2 clearfix">
                                    <p class="colblue font22 top25">查询姓名：{{name2}}</p>
                                    <p class="colblue font22 top20">查询范围：{{cityName2}}</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "Tmcx",
    data() {
        return {
            cityList:[],
            areaList:[],
            num: null,
            name2: '',
            city2: '',
            form: {
                name: '',
                orgId: '',
                orgId2: '',
                
            },
            rules: {
                orgId: [
                    { required: true, message: '请选择城市' },
                ],
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
            },
        }
	},
    components: {
        
    },
    methods: {
        inputFocus(e, type){
            const t = this;
            t.$systemService.inputFocus(e, type)
            
        },
        sub(){
            const t = this;
            let params = {
                orgId: t.form.orgId2 || t.form.orgId,
                name: t.form.name
            };
            t.$javaService.tmcx(t, params).then((res)=>{
                debugger
                t.num = res;
                t.name2 = t.form.name;
                t.cityName2 = t.cityName;
            },(res)=>{

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
        cityChoose(e){
            const t = this;
            let params = {
                orgId: t.form.orgId
            }
            t.cityName = t.cityList.filter((v)=>{
                return v.orgId == t.form.orgId
            })[0].orgName;
            t.$javaService.xjjgdmcx(t, params).then((res)=>{
                t.areaList = res;
                t.form.orgId2 = '';
            },(res)=>{

            })
        },
        areaChoose(){
            const t = this;
            t.cityName = t.areaList.filter((v)=>{return v.orgId == t.form.orgId2})[0].orgName;
        }
    },
    mounted(){
        const t = this;
        t.$javaService.jgdmcx(t).then((res)=>{
            t.cityList = res
        },(res)=>{
            
        })
    }
}
</script>

<style>
@import "../../style.css";
</style>
