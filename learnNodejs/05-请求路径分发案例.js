const http = require('http');
const path = require('path');
const fs = require('fs');

let readFile = (url,res) => {
  fs.readFile(path.join(__dirname,'www',url),'utf8',(err,fileContent) => {
    if(err)
    {
      res.end('server error!')
    }
    else
    {
      res.end(fileContent);
    }
  })
}
 http.createServer((request,response) => {
  if(request.url.startsWith('/index'))
  {
    readFile('index.html',response);
  } 
  else if(request.url.startsWith('/about'))
  {
    readFile('about.html',response);
  }
  else if(request.url.startsWith('/list'))
  {
    readFile('list.html',response);
  }
  else
  {
    //设置响应类型和编码
    response.writeHead(200,{
      'Content-Type':'text/plain;charset=utf8'
    })
    response.end("请求路径有误，请检查！")
  }
 }).listen(3000,'192.168.1.102',() => {
   console.log("服务器启动成功")
 });