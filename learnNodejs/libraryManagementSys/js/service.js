/**
 * 业务模块
 */
const fs = require('fs');
const path = require('path');
const db = require('./daAPI');


//渲染主页面
 exports.showIndex = (req,res) => {
    let sql = 'select * from bookLib';
    db.dbAPI(sql,null,results => {
       res.render('index',{list: results});
    })
    
 }

//跳转到添加图书的页面
exports.toAddBook = (req,res) => {
   res.render('addBook',{})
}

//添加图书
exports.addBook = (req,res) => {
   //获取表单数据
   let info = req.body;
   let sql = 'insert into bookLib set?'
   db.dbAPI(sql,info,results => {
      if(results.affectedRows == 1)
      {
         res.redirect('/');
      }
   });
}

//跳转到编辑书籍的页面
exports.toEditBook = (req,res) => {
   let id = req.query.id;
   let sql = 'select * from bookLib where id=?';
   let data = [id];
   db.dbAPI(sql,data,results => {
      res.render('EditBook',results[0]);
   })
   
}
//提交修改后的图书信息，并保存修改后的数据
exports.editBook = (req,res) => {
   let info = req.body;
   let sql = 'update bookLib set name=?,author=?,category=?,description=? where id=?';
   let data = [info.name,info.author,info.category,info.description,info.id];
   db.dbAPI(sql,data,results => {
      res.redirect('/');
   });
}

//删除图书
exports.deleteBook = (req,res) => {
   let id = req.query.id;
   let sql = 'delete from bookLib where id=?';
   let data = [id];
   db.dbAPI(sql,data,results => {
      if(results.affectedRows == 1)
      {
         res.redirect('/');
      }
   })
}
