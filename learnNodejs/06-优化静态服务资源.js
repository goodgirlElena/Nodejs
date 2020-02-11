const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./www/mime.json');
 http.createServer((request,response) => {
  fs.readFile(path.join(__dirname,'www',request.url),(err,fileContent) => {
    if(err)
    {
      //没有找到对应文件
      response.writeHead(4040,{
        'Content-Type':'text/plain; charset=utf8'
      })
      response.end("页面找不到了！")
    }
    else
    {
      let dtype = 'text/html';
      //获取请求文件的后缀
      let ext = path.extname(request.url);
      //如果请求的文件后缀合理，就获取到标准的响应格式
      if(mime[ext])
      {
        dtype = mime[ext];
      }
      //如果响应的内容是文本，则设置编码方式为utf8
      if(dtype.startsWith('text'))
      {
        dtype += '; charset=utf8'
      }
      //设置响应头
      response.writeHead(200,{
        'Content-type':dtype
      });
      response.end(fileContent);
    }
  })
 }).listen(3000,() => {
   console.log("服务器启动成功")
 });