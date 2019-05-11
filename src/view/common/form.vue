<template>
    <div>
        <el-form class="top25" label-position="right" :model="form" ref="form" :rules="rules" label-width="120px">
            <div class="clearfix" v-for="(v, i) in formList" :key='i'>
                <el-form-item :prop="v.prop" :label="v.label" :class="v.class" :style="v.style">
                    <el-input :v-model="form[v.prop]" :placeholder="v.placeholder"></el-input>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Form",
    data() {
        return {
            rules: {
                a: [
                    {required: true, message: '请选择车型' }
                ]
            },
            form: {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
            },
            // type 0 常规input 1 下拉 2 多选 3 textarea
            formList: [
                [
                    {style: 'width: 50%;', class: 'left', label: '姓名', type: 0, prop: 'a', placeholder: '请输入'},
                ],
            ],
        }
	},
    components: {
        
    },
    watch:{
        
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
