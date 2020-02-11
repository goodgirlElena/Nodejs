const http = require('http');
const querystring = require('querystring');

http.createServer((req,res) => {
  if(req.url.startsWith('/login'))
  {
    let pdata = '';
    req.on('data',(chunk) => {
      pdata += chunk;
    });
    req.on('end',() => {
      console.log(pdata);
      let obj = querystring.parse(pdata);
      res.end(obj.username+'------------'+obj.password);
    });
  }
}).listen(3000,() => {
  console.log('Running...');
});