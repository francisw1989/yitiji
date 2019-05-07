<template>
    <div class="wapper">
        <div>
            <span class="firstTit">{{this.$route.name}}</span>
        </div>
        <div class="boxWapAll2 top25">
            <div class="pad30">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="类型：">
                        <el-input v-model="form.a"></el-input>
                    </el-form-item>
                    <el-form-item label="主题：">
                        <el-input v-model="form.a"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名：">
                        <el-input v-model="form.a"></el-input>
                    </el-form-item>
                    <el-form-item label="类型：">
                        <el-input v-model="form.a"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        
        
    </div>
</template>

<script>

export default {
    name: "ConsultationCenter",
    data() {
        return {
            form: {
                a: '',
                b: '',
                c: '',
            }
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
.el-form-item__label{ font-size: 22px; line-height: 48px}
.el-input__inner{ height: 48px;}
</style>
