/**
 * 完整的登录验证案例（前端 + 后端 + 数据库）
 */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./lib/daAPI');
const app = express();
//启动静态资源
app.use(express.static('public'));

//处理请求参数
//挂载参数处理中间件(针对post)
app.use(bodyParser.urlencoded({extended: false}));

//启动服务器功能 
//配置路由
app.post('/check',(req,res) => {
  let info = req.body;
  let sql = 'select count(*) total from admin where user=? and password=?';
  let data =[info.username,info.password];
  db.dbAPI(sql,data,(results) => {
    if(results[0].total == 1)
      res.send('login success!');
    else
      res.send('login failure!');
  })

});
//监听端口
app.listen(3000,() => {
  console.log('Running...');
});