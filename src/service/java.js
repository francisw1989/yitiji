let commonurl = 'http://zzh.hzysofti.com:8001/api/v1/module/'
let javaService = {
    error(t){
        t.$alert('抱歉！本系统不能辨别您的需求，请到属地派出所申请办理','',{
            showClose: false
        }).then(()=>{
            document.querySelector('.btnIndex').click()
        });
    },
    lssfzm(t, params, data){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '人脸对比中。。。'
            });
            t.$axios({
                method: "post",
                url: commonurl + "lssfzm",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params,
                data: data
            }).then(res => {
                loading.close();
                resolve(res.data)
                console.log(res.data)
            }).catch((res)=>{
                loading.close();
                console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
        
    },
    wfzjlzm(t, params, cardImgs){
        
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '识别中。。。'
            });
            t.$axios({
                method: "post",
                url: commonurl + "wfzjlzm",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params,
                data: cardImgs
            }).then(res => {
                loading.close();
                resolve(res.data)
                console.log(res.data)
            }).catch((res)=>{
                loading.close();
                console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
        
    }
    
}
export { javaService }