//nodejs-socket简单服务器
var httpServer=require('http').createServer(hander);
var fs=require('fs');
var io=require('socket.io')(httpServer);

var documentRoot="E:/wwm/MyFiles/EasyTest/src";
httpServer.listen(8888);

function hander(req,res){
    console.log("welcome");
    //var url=req.url;
    //读取文件方式 fs
    var file=documentRoot+"/index.html";

    console.log(file);
    //读文件
    fs.readFile(file,function(err,data){
    
        if(err){
            res.writeHead(404,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.end('<h1>404</h1><p>你要找的页面不存在</p>');
        }else{
            res.writeHead(200,{
                'content-type':'text/html;charset="utf-8"'
            });
            res.end(data);
        }
    });
}
//socket
io.on("connection" ,function(socket){
    console.log("有人进来了")
    socket.emit('news',{hello:'world'}); //socket 事件发送器 emit()
    socket.on('my other event',function(data){
        console.log(data);
    })
    //socket 广播事件 borascast
    socket.broadcast.emit('another','有新人登录');

    socket.on('move',function(data){
        socket.broadcast.emit('setpossion',data);
    });
})


