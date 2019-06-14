let commonurl = '/api/v1/module/'
let commonurl2 = '/common/v1/dic/'

let javaService = {
    error(t){
        t.$alert('抱歉！本系统不能辨别您的需求，请到属地派出所申请办理','',{
            showClose: false
        }).then(()=>{
            document.querySelector('.btnIndex').click()
        });
    },
    // 临时身份证开具
    lssfzm(t, params, data){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '人脸对比中。。。'
            });
            debugger
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
                // console.log(res.data)
            }).catch((res)=>{
                debugger
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
        
    },
    // 无犯罪记录证明
    dicItems(t, params, cardImgs){
        
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
        
    },
    // 字典表
    dicItems(t, params){
        let p = new Promise((resolve, reject)=>{
            // let loading = t.$Loading.service({
            //     text: '识别中。。。'
            // });
            t.$axios({
                method: "get",
                url: commonurl2 + "dicItems",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params,
            }).then(res => {
                // loading.close();
                resolve(res.data)
            }).catch((res)=>{
                // loading.close();
                console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 身份识别
    sfsb(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '身份识别中。。。'
            });
            t.$axios({
                method: "post",
                url: commonurl + "sfsb",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                data: JSON.stringify(params)
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
    // 暂住申报登记
    sbzzdj(t, params){
        debugger
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: 'loading...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "sbzzdj",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                data: JSON.stringify(params)
            }).then(res => {
                loading.close();
                resolve(res.data)
                console.log(res.data)
            }).catch((res)=>{
                debugger
                loading.close();
                console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 交通违章查询
    jtwzcx(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "jtwzcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                data: JSON.stringify(params)
            }).then(res => {
                loading.close();
                resolve(res.data)
                console.log(res.data)
            }).catch((res)=>{
                debugger
                loading.close();
                console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 交通违章缴费
    jtwzjf(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "jtwzjf",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                data: JSON.stringify(params)
            }).then(res => {
                loading.close();
                resolve(res.data)
                console.log(res.data)
            }).catch((res)=>{
                debugger
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