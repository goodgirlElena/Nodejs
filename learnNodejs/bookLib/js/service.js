/**
 * 业务模块
 */
const data = require('../datas/books.json');
const fs = require('fs');
const path = require('path');


//自动生成图书编号 
const maxBookId = () => {
   let arr = [];
   data.forEach(item => {
      arr.push(item.id);
   });
   return Math.max.apply(null,arr);
}


//渲染主页面
 exports.showIndex = (req,res) => {
    res.render('index',{list: data});
 }

//跳转到添加图书的页面
exports.toAddBook = (req,res) => {
   res.render('addBook',{})
}

//添加图书 保存数据
exports.addBook = (req,res) => {
   //获取表单数据
   let info = req.body;
   let book = {};
   for(let key in info)
   {
      book[key] = info[key];
   }
   book.id = maxBookId() + 1;
   data.push(book);
   //把内存中的数据写入文件
   fs.writeFile(path.join(__dirname,'..','datas','books.json'),JSON.stringify(data,null,4),(err) => {
      if(err)
      {
         res.send('server error!');
      }
      //文件写入成功之后重新跳转到主页面
      res.redirect('/');
   });
}

//跳转到编辑书籍的页面
exports.toEditBook = (req,res) => {
   let id = req.query.id;
   let book = {}
   data.forEach(item => {
      if(id == item.id)
      {
         book = item;
         return;
      }
   });
   res.render('EditBook',book);
}
//提交修改后的图书信息，并保存修改后的数据
exports.editBook = (req,res) => {
   let info = req.body;
   data.forEach(item => {
      if(info.id == item.id)
      {
         for(let key in info)
         {
            item[key] = info[key];
         }
         return;
      }
   });
   //把内存中的数据写入文件
   fs.writeFile(path.join(__dirname,'..','datas','books.json'),JSON.stringify(data,null,4),(err) => {
      if(err)
      {
         res.send('server error!');
      }
      //文件写入成功之后重新跳转到主页面
      res.redirect('/');
   });
}
