/**
 * 登录验证功能 
 */
const http = require('http');
const ss = require('./mylib/staticServer');
const querystring = require('querystring');
const url = require('url');

http.createServer((req,res) => {
  //启动静态服务资源
  if(req.url.startsWith('/www'))
  {
    ss.staticServer(req,res,__dirname);
  }
  console.log(req.url);
  //动态资源
  if(req.url.startsWith('/login'))
  {
    //get请求
    if(req.method == 'GET')
    {
      let param = url.parse(req.url,true).query;
      if(param.username == 'Elena' && param.password == '123456')
      {
        res.end('get success!');
      }
      else
      {
        res.end('get failure!');
      }
      // res.end('get');
    }
    //post请求
    if(req.method == 'POST')
    {
      let pdata = '';
      req.on('data',(chunk) => {
        pdata += chunk;
      });
      req.on('end',() => {
        let obj = querystring.parse(pdata);
        if(obj.username == 'Elena' && obj.password =='123456')
        {
          res.end('success');
        }
        else
        {
          res.end('faliure');
        }
      });
      // res.end('post');
    }
  }
}).listen(3000,() => {
  console.log("Running...");
})