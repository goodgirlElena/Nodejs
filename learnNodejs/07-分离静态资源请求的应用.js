const path = require('path');
const http = require('http');
const ss = require('./mylib/staticServer');

http.createServer((req,res) => {
  ss.staticServer(req,res,path.join(__dirname,'www'));
}).listen(3000,() => {
  console.log('Running');
});