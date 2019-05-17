<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div style="padding: 50px 60px">
                <el-form label-position="left" :model="form" ref="form" :rules="rules" label-width="140px">
                    <el-form-item label="身份证号：" prop="a">
                        <el-input v-model="form.a" placeholder="请输入身份证"></el-input>
                    </el-form-item>
                </el-form>
                <div class="center" style="margin-top: 70px">
                    <span class="btns btns-big btns-blue">查询</span>
                </div>
                <div class="top60">
                    <p class="colblue font24" style="padding-bottom: 15px; border-bottom: 1px solid #1755B1">查询结果</p>
                </div>
                <div class="top25">
                    <table class="m-table3">
                        <tr>
                            <td class="td">身份证号</td>
                            <td>411381**********74</td>
                        </tr>
                        <tr>
                            <td class="td">办理状态</td>
                            <td>已制证【温馨提示】2017-06-15后方可到派出所领取!</td>
                        </tr>
                        <tr>
                            <td class="td">时间</td>
                            <td>2017-06-01 15:12:27</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "Sfz",
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
