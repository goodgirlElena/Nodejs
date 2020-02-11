/**
 * 通用数据库操作API
 */
//加载数据库驱动
const mysql = require('mysql');
exports.dbAPI = (sql,data,callback) => {
  //创建数据库链接
  const connection = mysql.createConnection({
    host     : 'localhost',//数据库所在的服务器的域名或者IP
    user     : 'user',
    password : '914487379k',
    database : 'book'
  });
  //执行链接操作
  connection.connect();

  //操作数据库
  connection.query(sql,data,function (error, results, fields) {
    if (error) throw error;
    callback(results);
  });
  //关闭数据库
  connection.end();
}
