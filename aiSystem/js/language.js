$(function(){ 
    var script=document.createElement("script");  
    script.type="text/javascript";  
    script.src="http://www.microsoftTranslator.com/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**";  
    document.getElementsByTagName('head')[0].appendChild(script);  

    // 这里很重要，因为每次页面刷新都会重新执行该自执行函数，所以不管用户如何切换页面，只要点击了按钮，就统一了状态，而不用切换一次页面点击一次按钮
    var value = sessionStorage.getItem("language");
    // 判断页面是否加载完成
    document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
            if(value==="1"){
                Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
            }
        }
    }
    function onProgress(value) {
    }
    function onError(error) {
    }
    function onComplete() {
        $("#WidgetFloaterPanels").hide();
    }
    function onRestoreOriginal() { 
    }
});

function translate(){
    var value = sessionStorage.getItem("language");
    if(value==="1"){
        sessionStorage.setItem("language", "0"); 
    }else{
        sessionStorage.setItem("language", "1");
    }
    window.location.reload();//刷新当前页面，重新加载自执行函数
}
