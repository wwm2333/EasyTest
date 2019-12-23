
//nodejs简单服务器
//开启一个http的服务器，端口8888
var http=require('http');
var fs=require('fs');
var documentRoot="E:/wwm/MyFiles/EasyTest/src";

var server=http.createServer(function(req,res){
console.log("welcome");
var url=req.url;
//读取文件方式 fs
var file=documentRoot+url+".html";

console.log(file);
//读文件
fs.readFile(file,function(err,data){
    if(err){
        res.writeHead(404,{
            'content-type':'text/html;charset="utf-8"'
        });
        res.write('<h1>404</h1><p>你要找的页面不存在</p>');
        res.end();
    }else{
        res.writeHead(200,{
            'content-type':'text/html;charset="utf-8"'
        });
        res.write(data);
        res.end();
    }

})

}).listen(8888);

