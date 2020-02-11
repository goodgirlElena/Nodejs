/**
 * 更新数据库的信息
 */
//加载数据库驱动
const mysql = require('mysql');
//创建数据库链接
const connection = mysql.createConnection({
  host     : 'localhost',//数据库所在的服务器的域名或者IP
  user     : 'user',
  password : '914487379k',
  database : 'book'
});
//执行链接操作
connection.connect();
let sql = 'update bookLib set name=?,author=?,category=?,description=? where id=?';
let data = ['童年','马克西姆·高尔基','文学','讲述了阿廖沙（高尔基的乳名）三岁到十岁这一时期的童年生活',8];

//操作数据库
connection.query(sql,data,function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows == 1)
  {
    console.log('更新数据成功！');
  }
});
//关闭数据库
connection.end();