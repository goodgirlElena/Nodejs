/**
 * 说明：初步实现服务器功能
 * 使用：运行 node 03-初步实现服务器功能.js 再在网址输入localhost:3000即可访问
 */


const http = require('http');
 // 1、创建服务器实例对象
let server = http.createServer();
 // 2、绑定请求事件
 server.on('request',(request,response) => {
   response.end('Hello Nodejs!');
 })
 // 3、监听端口
 server.listen(3000,'192.168.1.102',() => {
   console.log("服务器启动成功")
 });//server.listen后面的两个参数在此处只是用来演示这个函数的用法，看情况决定后两个参数用与否
