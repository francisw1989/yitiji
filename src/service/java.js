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
    // 预约
    getOrder(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "getOrder",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                // this.error(t);
                reject(res.response.data)
            });
        })
        return p;
    },
    // 根据地区获取窗口数量统计（我要预约、资讯 前置查询）
    areaCount(t, params){
        let p = new Promise((resolve, reject)=>{
            
            t.$axios({
                method: "post",
                url: commonurl + "areaCount",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 按业务类型获取窗口列表（我要预约、资讯 前置查询）
    // 获取户籍室
    wicket(t, params){
        let p = new Promise((resolve, reject)=>{
            
            t.$axios({
                method: "post",
                url: commonurl + "wicket",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 按事项 ID 获取详情（我要预约、资讯 前置查询）
    registerDetail(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "registerDetail",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 按窗口或区域获取事项列表（我要预约、资讯 前置查询）
    registerByWicketId(t, params){
        let p = new Promise((resolve, reject)=>{
            
            t.$axios({
                method: "post",
                url: commonurl + "registerByWicketId",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 预约时间段获取
    dayTime(t, params){
        let p = new Promise((resolve, reject)=>{
            // let loading = t.$Loading.service({
            //     text: '查询中...'
            // });
            t.$axios({
                method: "post",
                url: commonurl + "dayTime",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                // loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                // loading.close();
                // console.log(res.response.data.msg)
                // this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 出入境办理进度查询
    crjbljdcx(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "crjbljdcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 出入境證件查询
    crjzjcx(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "crjzjcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 同名查询
    tmcx(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "tmcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 同名查询--城市列表
    jgdmcx(t){
        let p = new Promise((resolve, reject)=>{
            
            t.$axios({
                method: "post",
                url: commonurl + "jgdmcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
            }).then(res => {
                
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 同名查询----县区列表
    xjjgdmcx(t, params){
        let p = new Promise((resolve, reject)=>{
            
            t.$axios({
                method: "post",
                url: commonurl + "xjjgdmcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
               
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 身份证办理进度查询
    sfzbljdcx(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "sfzbljdcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 警情公开详情
    jqgkxqcx(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "jqgkxqcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 警情公开
    jqgkcx(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "jqgkcx",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 执法办案公开
    zfbagk(t, params){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: '查询中...'
            });
            t.$axios({
                method: "post",
                url: commonurl + "zfbagk",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 首页推荐菜单
    recommend(t){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: 'loading...'
            });
            t.$axios({
                method: "get",
                url: commonurl + "recommend/list",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                }
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
    },
    // 获取所有菜单
    parentmodule(t, parentModuleId){
        let p = new Promise((resolve, reject)=>{
            let loading = t.$Loading.service({
                text: 'loadig...'
            });
            t.$axios({
                method: "get",
                url: commonurl + "parentmodule/"+parentModuleId,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                }
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
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
    wfzjlzm(t, params){
        
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
                params: params
            }).then(res => {
                loading.close();
                resolve(res.data)
                // console.log(res.data)
            }).catch((res)=>{
                loading.close();
                // console.log(res.response.data.msg)
                this.error(t);
                reject(res.response.data.msg)
            });
        })
        return p;
        
    },
    // 获取所有字典分类
    types(t){
        let p = new Promise((resolve, reject)=>{
            // let loading = t.$Loading.service({
            //     text: '识别中。。。'
            // });
            t.$axios({
                method: "get",
                url: commonurl2 + "types",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json;charset=UTF-8"
                },
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
    },
    
}
export { javaService }