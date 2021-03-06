/**
 * 动态网站开发
 */
 
 const http = require('http');
 const path = require('path');
 const fs = require('fs');
 const querystring = require('querystring');
 const scoreData = require('../../www/score.json');

 http.createServer((req,res) => {
  //路由 请求路径+请求方式 
  //查询成绩的入口地址
   if(req.url.startsWith('/query') && req.method == 'GET')
   {
     fs.readFile(path.join(__dirname,'..','view','index.html'),'utf8',(err,content) => {
       if(err) 
       {
         res.writeHead(500,{
           'Content-Type':'text/plain; charset=utf8'
         });
         res.end('服务器错误，请于管理员联系1。')
       }
       res.end(content);
     });
   }
   else if(req.url.startsWith('/score') && req.method == 'POST')
   {
     //获取成绩的结果
      let pdata = '';
      req.on('data',(chunk) => {
        pdata += chunk;
      });
     req.on('end',() => {
       let obj = querystring.parse(pdata);
       let result = scoreData[obj.code];
       fs.readFile(path.join(__dirname,'..','view','result.html'),'utf8',(err,content) => {
         if(err)
         {
           res.writeHead(500,{
             'Content-Type':'text/plain; charset=utf8'
           });
           res.end("服务器错误，请于管理员联系。2");
         }
        //  console.log(obj);
        //  content = content.replace('$$chinese$$',result.chinese);
        //  content = content.replace('$$math$$',result.math);
        //  content = content.replace('$$english$$',result.english);
        //  content = content.replace('$$summary$$',result.summary);
        //使用模板引擎
        let template = require('art-template');
        let html = template(__dirname + '/../result.art', {
            chinese: result.chinese,
            math: result.math,
            english: result.english,
            summary: result.summary
        });
         res.end(html);
        })
     })
   }
 }).listen(3000,() => {
   console.log("Running...");
 });