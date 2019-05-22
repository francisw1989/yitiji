let systemService = {
    //读取唯一编码
    GetCode(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetCode((result) => {
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
    GetIDCard(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetIDCard((result) => {
                if (result.status == 0) {
                    //成功,返回json格式身份证信息
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
    //打开活体检测窗口(窗口的大小和显示位置可以调整)
    OpenLiveDetect() {
        let p = new Promise((resolve, reject)=>{
            let params = "{'x': 200,'y': 200,'width': 200,'height': 200}";
            SystemCommon.OpenLiveDetect(params,(result) => {
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
    //活体检测（开始视频）
    StartVedio(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StartVedio((result) => {
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
    //活体检测-开始活体检测
    OpenHtjc(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.OpenHtjc((result) => {
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
    //活体检测-开始活体检测
    ReceiveLiveDetectImage(){
        let p = new Promise((resolve, reject)=>{
            console.log(str);
            $('#LiveDetectImage').attr('src', "data:image/png;base64," + str);
        });
        return p;
    },
    //活体检测-手动抓拍
    ManualCatch(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.ManualCatch((result) => {
                if (result.status == 0) {
                    //成功
                    $('#ManualCatch').attr('src', "data:image/png;base64," + result.text);
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
    //活体检测-开始人脸检测
    StartFaceDetect(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StartFaceDetect((result) => {
                if (result.status == 0) {
                    //成功
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
    //活体检测-开始人脸检测
    StopLiveDetect(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StopLiveDetect((result) => {
                if (result.status == 0) {
                    //成功
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
    //活体检测-获得活检或质检失败的可能原因
    GetErrInfo(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.GetErrInfo((result) => {
                if (result.status == 0) {
                    //获得活检或质检失败的可能原因
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
    //活体检测-关闭视频
    StopVedio(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.StopVedio((result) => {
                if (result.status == 0) {
                    //获得活检或质检失败的可能原因
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
    //高拍仪相关操作===
    //打开高拍仪窗口
    HPAOpenWindows(){
        let p = new Promise((resolve, reject)=>{
            let params = "{'x': 200,'y': 200,'width': 400,'height': 400}";
            SystemCommon.HPAOpenWindows(params, (result) => {
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
    //打开高拍仪摄像头
    HPAOpenVideo(){
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
                    $('#HPATakePhoto').attr('src', "data:image/png;base64," + result.text);
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
    // 开灯
    LightUp(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.LightUp((result) => {
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
    // 闪烁
    LightFlash(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.LightFlash((result) => {
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
    // 关灯
    LightOff(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.LightOff((result) => {
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
    // 播放语音
    SoundPlayer(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.SoundPlayer((result) => {
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
    // 打开键盘
    OpenKeyBoard(){
        let p = new Promise((resolve, reject)=>{
            let params = "{'x':100,'y':50,'type':1}";
            SystemCommon.OpenKeyBoard(params, (result) => {
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
    // 关闭键盘
    CloseKeyBoard(){
        let p = new Promise((resolve, reject)=>{
            SystemCommon.CloseKeyBoard((result) => {
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
}
export { systemService }