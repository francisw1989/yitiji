let commonurl = 'http://zzh.hzysofti.com:8001/api/v1/module/'
let javaService = {
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
                reject(res.response.data.msg)
            });
        })
        return p;
        
    }
    
}
export { javaService }