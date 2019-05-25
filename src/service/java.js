let commonurl = 'http://zzh.hzysofti.com:8001/api/v1/module/'
let javaService = {
    lssfzm(t, params){
        t.$http.post(commonurl + 'lssfzm',params,{emulateJSON:true}).then((res)=>{
            console.log(res)  
        },function(res){
            console.log(res);
        });
    },
    wfzjlzm(t, params){
        t.$http.post(commonurl + 'wfzjlzm',params,{emulateJSON:true}).then((res)=>{
            console.log(res)  
        },function(res){
            console.log(res);
        });
    },
    
}
export { javaService }