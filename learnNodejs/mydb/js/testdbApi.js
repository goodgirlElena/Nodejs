const dbAPI = require('./daAPI');
/*
//向数据库中添加数据
let sql = 'insert into bookLib set?';
let data = {
  name: '天龙八部',
  author: '金庸',
  category: '武侠小说',
  description: '武侠小说'
};
dbAPI.dbAPI(sql,data,(results) => {
  console.log(results);
});
*/


//更新数据库中的数据
let sql = 'update bookLib set name=?,author=?,category=?,description=? where id=?';
let data = ['笑傲江湖','金庸','武侠小说','武侠小说',8];
dbAPI.dbAPI(sql,data,(results) => {
  console.log(results);
});


/*
//删除数据库中的数据
// let sql = 'truncate table bookLib';
// let data = null;
let sql = 'delete from bookLib where id=?';
let data = [9];
dbAPI.dbAPI(sql,data,(results) => {
  console.log(results);
})
*/
/*
//查询数据库中的消息
let sql = 'select * from bookLib where id=?';
let data = [8];
dbAPI.dbAPI(sql,data,(results) => {
  console.log(results);
})
*/