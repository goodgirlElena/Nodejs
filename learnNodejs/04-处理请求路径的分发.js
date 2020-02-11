/**
 * 处理请求路径的分发：
 * 1、request对象是Class:http.IncomingMessage的实例对象
 * 2、response对象是Class:http.ServerResponse的实例对象
 */

const http = require('http');
 http.createServer((request,response) => {
  if(request.url.startsWith('/index'))
  {
    response.end('Hello index!')
  } 
  else if(request.url.startsWith('/about'))
  {
    response.end('Hello about!');
  }
  else
  {
    response.end('request error!');
  }
 }).listen(3000,'192.168.1.102',() => {
   console.log("服务器启动成功")
 });