/**
 * 向数据库插入数据
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
let sql = 'insert into bookLib set ?';
let data = {
  name: '乌合之众',
  author: '古斯塔夫·勒庞',
  category: '心理学',
  description: '大众心理学！'
};

//操作数据库
connection.query(sql,data,function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows == 1)
  {
    console.log('插入数据成功！');
  }
});
//关闭数据库
connection.end();