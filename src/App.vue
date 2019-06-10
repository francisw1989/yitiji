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
      var script1 = document.createElement("script");
      script1.type = "text/javascript";
      script1.src = "http://www.hzysofti.com/js/pdf.js";
      document.body.appendChild(script1);
      var script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.src = "http://www.hzysofti.com/js/pdf.worker.js";
      document.body.appendChild(script2);
      var script3 = document.createElement("script");
      script3.type = "text/javascript";
      script3.src = "https://pdfobject.com/js/pdfobject.min.js";
      document.body.appendChild(script3);
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
