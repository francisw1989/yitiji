<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="" style="padding: 50px 60px">
                <el-form label-position="left" :model="form" ref="form" :rules="rules" label-width="140px">
                    <div class="clearfix">
                        <el-form-item label="选择城市：" prop="a" class="left" style="width:49%;">
                            <el-select v-model="form.a" placeholder="请选择城市" style="width: 100%">
                                <el-option label="江苏" value="江苏"></el-option>
                                <el-option label="浙江" value="浙江"></el-option>
                                <el-option label="河南" value="河南"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="选择县区：" prop="a" class="left" style="width:49%;">
                            <el-select v-model="form.a" placeholder="请选择城市" style="width: 100%">
                                <el-option label="江苏" value="江苏"></el-option>
                                <el-option label="浙江" value="浙江"></el-option>
                                <el-option label="河南" value="河南"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>
                    <div class="clearfix">
                        <el-form-item label="查询姓名：" prop="a" class="left" style="width:50%;">
                            <el-input v-model="form.a" placeholder="请输入姓名"></el-input>
                        </el-form-item>
                    </div>
                </el-form>
                <div class="center top50">
                    <span class="btns btns-big btns-blue">查询</span>
                </div>
                <div class="top60">
                    <p class="colblue font24" style="padding-bottom: 15px; border-bottom: 1px solid #1755B1">查询结果</p>
                </div>
                <div class="top25">
                    <table>
                        <tr>
                            <td style="width: 202px">
                                <div class="jgBox1 clearfix">
                                    <p style="font-size: 48px;" class="colblue top10">18</p>
                                    <p class="colblue font22 top10">重名人数</p>
                                </div>
                            </td>
                            <td>
                                <div class="jgBox2 clearfix">
                                    <p class="colblue font22 top25">查询姓名：张一</p>
                                    <p class="colblue font22 top20">查询范围：河南省</p>
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
            form: {
                a: '',
            },
            rules: {
                a: [
                    {required: true, message: '请输入身份证号' }
                ]
            },
        }
	},
    components: {
        
    },
    methods: {
        
    },
    mounted(){
        const t = this;
        
        
    }
}
</script>

<style>
@import "../../style.css";
</style>
