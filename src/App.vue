<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
  
</template>

<script>
import Header from './view/common/Header';
import Footer from './view/common/Footer';
export default {
    name: "app",
    components: {
        Header,
        Footer
    },
    methods: {
        
    },
    mounted(){
      
      if(typeof(SystemCommon)=='undefined'){
          this.$alert('未找到终端','',{
            showClose: false
          });
          return;
      }
    }
}
</script>

<style>
</style>
