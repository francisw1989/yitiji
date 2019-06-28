let systemService = {
    // 打印照片
    PrintImage(t, base64Str){
        var jsonStr = "{'Base64Str':'" + base64Str + "','DocumentName':''}";
        SystemCommon.PrintImage(jsonStr, result => {
            if (result.status == 0) {
                //获取当前打印状态码
                console.log(result.status);
                //获取当前打印状态描述
                console.log(result.text);
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
    },
    // 打印
    PrintDocument(t){
        this.LightFlash(t, 7);
        let loading = t.$Loading.service({
            text: '打印中。。。'
        });
        let p = new Promise((resolve, reject)=>{
            var base64Str = localStorage.PDFBase64;
            var jsonStr = "{'Base64Str':'" + base64Str + "','DocumentName':''}";
            SystemCommon.PrintDocument(jsonStr, result => {
                if (result.status == 0) {
                    this.PrinterStatus();
                    setTimeout(() => {
                        this.errorfun(t ,'打印成功')
                        this.LightFlash(t, 7);
                        loading.close();
                    }, 3000);
                    //获取当前打印状态码
                    console.log(result.status);
                    //获取当前打印状态描述
                    console.log(result.text);
                    //成功,
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    t.$javaService.hardWaoreErrLog(t,'5','PrintDocument', result.msg)
                    
                }
            });
        });
        return p;

        
    },
    // 打开键盘
    inputFocus(e, type){
        const t = this;
        let s = t.StatusKeyBoard();
        let _do = ()=>{
            console.log(type)
            // type: 0 中文键盘 1 英文键盘 2 手写 3 数字 4 符号 （优先打开的键盘类型）
            let params = {'x':50,'y':e.target.getBoundingClientRect().y + 48,'type': type};
            t.OpenKeyBoard(t, params)
        }
        if(s==0){
            t.CloseKeyBoard(t).then(()=>{
                setTimeout(()=>{
                    _do()
                }, 500)
            });
        }else{
            _do();
        }
        
    },
    //读取唯一编码
    errorfun(t, msg){
        t.$alert(msg,'',{
            showClose: false
        }).then(()=>{
            document.querySelector('.btnIndex').click()
        });
    },
    GetCode(){
        let code = '';
        typeof(SystemCommon)!='undefined' && SystemCommon.GetCode((result) => {
            if (result.status == 0) {
                //成功
                console.log(result.text);
                code = result.text;
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
        return code;
    },
    //读取Mac地址
    GetMac(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetMac((result) => {
                if (result.status == 0) {
                    //成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //读取身份证信息 (其他身份证信息请查看控制台打印数据)
    GetIDCard(t){
        this.LightFlash(t, 2);
        
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetIDCard((result) => {
                if (result.status == 0) {
                    //成功,返回json格式身份证信息
                    // console.log(result.text);
                    resolve(result.text);
                    this.LightOff(t, 2);
                } else {
                    this.LightOff(t, 2);
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    // this.errorfun(t, result.msg);
                    this.SoundPlayer(t, '身份证读取失败');
                    t.$javaService.hardWaoreErrLog(t,'1','GetIDCard', result.msg)
                    t.$alert(result.msg,'',{
                        showClose: false
                    })
                    
                    reject();
                }
            });
        });
        return p;
    },
    //打开活体检测窗口(窗口的大小和显示位置可以调整)
    OpenLiveDetect(t) {
        let p = new Promise((resolve, reject)=>{
            let obj = document.querySelector('.faceWap .cont');
            let x = obj.offsetLeft;
            let y = obj.offsetTop;
            let width = obj.offsetWidth;
            let height = obj.offsetHeight;
            let params = {'x': x,'y': y,'width': width,'height': height};
            SystemCommon.OpenLiveDetect(JSON.stringify(params),(result) => {
                if (result.status == 0) {
                    console.log('打开活体检测窗口：'+ result.msg);
                    resolve();
                } else {
                    this.errorfun(t, result.msg);
                    console.log('打开活体检测窗口：'+ result.msg);
                    t.$javaService.hardWaoreErrLog(t,'6','OpenLiveDetect', result.msg)
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测（开始视频）
    StartVedio(t){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StartVedio((result) => {
                if (result.status == 0) {
                    //成功
                    console.log('活体检测（开始视频）：'+ result.msg);
                    resolve();
                } else {
                    //错误状态码
                    //错误提示信息
                    this.errorfun(t, result.msg);
                    t.$javaService.hardWaoreErrLog(t,'6','StartVedio', result.msg)
                    console.log('活体检测（开始视频）：'+ result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-开始活体检测
    OpenHtjc(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.OpenHtjc((result) => {
                if (result.status == 0) {
                    //成功
                    console.log('活体检测-开始活体检测：'+ result.msg);
                    console.log(result);
                    resolve();
                } else {
                    //错误状态码
                    this.errorfun(t, result.msg);
                    console.log('活体检测-开始活体检测(失败)：' + result.msg);
                    t.$javaService.hardWaoreErrLog(t,'2','OpenHtjc', result.msg)
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-回调函数，异步返回检测成功的照片 base64
    ReceiveLiveDetectImage(str){
        let p = new Promise((resolve, reject)=>{
            document.querySelector('.faceWap .cont').style.backgroundImage = "data:image/png;base64," + str;

        });
        return p;
    },
    //活体检测-手动抓拍
    ManualCatch(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.ManualCatch((result) => {
                if (result.status == 0) {
                    //成功
                    console.log('活体检测-手动抓拍：'+ result.msg);
                    // $('#ManualCatch').attr('src', "data:image/png;base64," + );
                    resolve(result.text);
                } else {
                    //错误状态码
                    this.errorfun(t, result.msg);
                    console.log('活体检测-手动抓拍 （失败）：'+ result.msg);
                    //错误提示信息
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-开始人脸检测
    StartFaceDetect(t){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StartFaceDetect((result) => {
                if (result.status == 0) {
                    //成功
                    console.log('活体检测-开始人脸检测：'+ result.msg);
                    resolve();
                } else {
                    //错误状态码
                    this.errorfun(t, result.msg);
                    console.log('活体检测-开始人脸检测 （失败）：'+ result.msg);
                    //错误提示信息
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-停止人脸检测
    StopLiveDetect(t){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StopLiveDetect((result) => {
                if (result.status == 0) {
                    //成功
                    console.log('活体检测-停止人脸检测：'+ result.msg);
                    resolve();
                } else {
                    //错误状态码
                    this.errorfun(t, result.msg);
                    console.log('活体检测-停止人脸检测(失败)：'+ result.msg);
                    //错误提示信息
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-获得活检或质检失败的可能原因
    GetErrInfo(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetErrInfo((result) => {
                if (result.status == 0) {
                    //获得活检或质检失败的可能原因
                    console.log('活体检测-获得活检或质检失败的可能原因:');
                    console.log(result);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-关闭视频
    StopVedio(t){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StopVedio((result) => {
                if (result.status == 0) {
                    //获得活检或质检失败的可能原因
                    console.log('活体检测-关闭视频：'+ result.msg);
                    resolve();
                } else {
                    //错误状态码
                    //this.errorfun(t, result.msg);
                    console.log('活体检测-关闭视频(失败)：'+ result.msg);
                    //错误提示信息
                    reject();
                }
            });
        });
        return p;
    }, 
    //活体检测-创建子窗口
    CreateSubViewWindow(){
        let p = new Promise((resolve, reject)=>{
            let params = "{'x': 400,'y': 300,'width': 350,'height': 350,'showLiveDetect':'True'}";
            SystemCommon.CreateSubViewWindow(params,(result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-创建子窗口
    ShowSubViewWindow(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.ShowSubViewWindow((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-隐藏子窗口
    HideSubViewWindow(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.HideSubViewWindow((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-获取厂商号
    GetProduct(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetProduct((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-获取PayCam产品信息
    GetPayCamProduct(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetPayCamProduct((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-获取PayCam版本
    GetPayCamVersion(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetPayCamVersion((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //活体检测-获取PayCam厂商
    GetManufacturer(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetManufacturer((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //关闭双目摄像头窗口
    CloseLiveDetect(t){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.CloseLiveDetect((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    console.log('关闭双目摄像头窗口：'+ result.msg);
                    resolve();
                } else {
                    //this.errorfun(t, result.msg);
                    console.log('关闭双目摄像头窗口(失败)：'+ result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    //高拍仪相关操作===
    //打开高拍仪窗口
    HPAOpenWindows(t){
        this.LightFlash(t, 9);
        this.LightFlash(t, 6);
        let p = new Promise((resolve, reject)=>{
            let params = {'x': 388,'y': 165,'width': 800,'height': 604};
            SystemCommon.HPAOpenWindows(JSON.stringify(params), (result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    t.$javaService.hardWaoreErrLog(t,'6','HPAOpenWindows', result.msg)
                    reject();
                }
            });
        });
        return p;
    },
    //打开高拍仪摄像头
    HPAOpenVideo(t){
        this.LightFlash(t, 9);
        this.LightFlash(t, 6);
        let p = new Promise((resolve, reject)=>{
            SystemCommon.HPAOpenVideo((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    t.$javaService.hardWaoreErrLog(t,'6','HPAOpenVideo', result.msg)
                    reject();
                }
            });
        });
        return p;
    },
    // 拍照/重拍
    HPATakePhoto(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.HPATakePhoto((result) => {
                if (result.status == 0) {
                    // 成功
                    // $('#HPATakePhoto').attr('src', "data:image/png;base64," + result.text);
                    console.log(result.text);
                    resolve(result.text);
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    t.$javaService.hardWaoreErrLog(t,'3','HPATakePhoto', result.msg)
                    reject();
                }
            });
        });
        return p;
    },
    // 旋转
    HPARotate(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.HPARotate((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    // 关闭高拍仪窗口
    HPACloseWindows(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.HPACloseWindows((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log(result.text);
                    resolve();
                } else {
                    //错误状态码
                    console.log(result.status);
                    //错误提示信息
                    console.log(result.msg);
                    reject();
                }
            });
        });
        return p;
    },
    // 高拍仪打开照明灯
    HPALightUp(t){
        SystemCommon.HPALightUp("9", result => {
            if (result.status == 0) {
                //成功,
                console.log("成功");
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
                t.$javaService.hardWaoreErrLog(t,'4','HPALightUp', result.msg)
            }
        });
    },
    // 高拍仪关闭照明灯
    HPALightOff(t){
        SystemCommon.HPALightOff("9", result => {
            if (result.status == 0) {
                //成功,
                console.log("成功");
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
    },

    // 开灯 指示灯
    /*
        9：高拍仪灯
        7：打印机灯
        6：扫描入口灯（跟高拍仪走）
        5：非接触式IC卡阅读指示灯
        4：银联卡插口灯
        3：物理键盘输入密码
        2：身份证读卡器指示灯
        1：打印凭条指示灯
    */
    LightUp(t, type){
        SystemCommon.LightUp(type, result => {
            if (result.status == 0) {
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
    },
    // 关灯 - 指示灯
    LightOff(t, type){
        SystemCommon.LightOff(type, result => {
            if (result.status == 0) {
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
    },
    // 闪烁
    LightFlash(t, type){
        SystemCommon.LightFlash(type, result => {
            if (result.status == 0) {
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
                t.$javaService.hardWaoreErrLog(t,'4','LightFlash', result.msg)
            }
        });
    },
    // 播放语音
    SoundPlayer(t, str){
        SystemCommon.SoundPlayer(str, result => {
            if (result.status == 0) {
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
    },
    // 打开键盘
    OpenKeyBoard(t, params){
        if(typeof(SystemCommon) == 'undefined'){
            return
        }
        let s = this.StatusKeyBoard();
        if(s==0){
            return
        }
        let p = new Promise((resolve, reject)=>{
            SystemCommon.OpenKeyBoard(JSON.stringify(params), (result) => {
                if (result.status == 0) {
                    // 成功
                    console.log('打开键盘：'+ result.msg);
                    resolve();
                } else {
                    //错误状态码
                    console.log('打开键盘（失败）：'+ result.msg);
                    t.$javaService.hardWaoreErrLog(t,'6','OpenKeyBoard', result.msg)
                    //错误提示信息
                    reject();
                }
            });
        });
        return p;
    },
    // 关闭键盘
    CloseKeyBoard(t){
        if(typeof(SystemCommon) == 'undefined'){
            return
        }
        let s = this.StatusKeyBoard();
        if(s!=0){
            return
        }
        let p = new Promise((resolve, reject)=>{
            SystemCommon.CloseKeyBoard((result) => {
                if (result.status == 0) {
                    // 成功
                    console.log('关闭键盘：'+ result.msg);
                    resolve();
                } else {
                    //错误状态码
                    this.errorfun(t, result.msg);
                    console.log('关闭键盘（失败）：'+ result.msg);
                    //错误提示信息
                    reject();
                }
            })
        })
        return p;            
        
    },
    // 获取键盘状态
    StatusKeyBoard(){
        if(typeof(SystemCommon) == 'undefined'){
            return
        }
        let status;
        
        SystemCommon.StatusKeyBoard((result) => {
            status = result.status
        });
        return status;
    },
     // 打开操作向导
    OpenTipwizard(t, code) {
        if(typeof(SystemCommon) == 'undefined'){
            return
        }
        SystemCommon.OpenTipwizard(code, result => {
            if (result.status == 0) {
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
                t.$javaService.hardWaoreErrLog(t,'6','OpenTipwizard', result.msg)
            }
        });
    },
    // 关闭操作向导
    CloseTipwizard() {
        SystemCommon.CloseTipwizard(result => {
            if (result.status == 0) {
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
    },
    PrinterStatus(){
        SystemCommon.PrinterStatus(result => {
            if (result.status == 0) {
                //获取当前打印机状态码
                console.log(result.code);
                //获取当前打印机状态描述
                console.log(result.text);
                //成功,
            } else {
                //错误状态码
                console.log(result.status);
                //错误提示信息
                console.log(result.msg);
            }
        });
    }


}
export { systemService }