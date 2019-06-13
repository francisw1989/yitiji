<template>
    <div class="modal1">
        <div class="leftArea">

        </div>
        <div class="rightArea"></div>
    </div>
    
</template>

<script>
import emit from '../../emit.js';
export default {
    name: "Photoshot",
    data() {
        return {
            m:[
                {type: '00', base64DATA: '', title: '申报人身份证人像面'},
                {type: '00', base64DATA: '', title: '申报人身份证国徽面'},
                {type: '01', base64DATA: '', title: '租房合同'},
                {type: '01', base64DATA: '', title: '租房合同'},
                {type: '01', base64DATA: '', title: '租房合同'},
                {type: '01', base64DATA: '', title: '租房合同'},
                {type: '01', base64DATA: '', title: '租房合同'},
                {type: '01', base64DATA: '', title: '租房合同'},
                {type: '01', base64DATA: '', title: '租房合同'},
                
            ]
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
