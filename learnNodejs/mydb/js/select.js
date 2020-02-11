/**
 * 查询数据库的信息
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
// let sql = 'select * from bookLib';
let sql1 = 'select * from bookLib where id = ?'
// let data = null;
let data1 = [1];

//操作数据库
connection.query(sql1,data1,function (error, results, fields) {
  if (error) throw error;
//  console.log(results);
    console.log(results[0].name);
});
//关闭数据库
connection.end();