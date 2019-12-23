//worker 后台处理程序
importScripts('xxx.js');//引入其他js文件

self.onmessage=function(ev){
    //进行一系列复杂操作后，返回一个结果
    var data=ev.data+"hihihi"
    self.postMessage(data);
}