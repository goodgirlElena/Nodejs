/**
 * 把data.json中的数据拼接成sql insert语句
 */ 

 const path = require('path');
 const fs = require('fs');


 fs.readFile(path.join(__dirname,'..','datas','books.json'),'utf8',(err,content) => {
   if(err) return;
   let list = JSON.parse(content);
   let arr = [];
   list.forEach(item => {
     let sql = `insert into bookLib values('${item.id}','${item.name}','${item.author}','${item.category}','${item.description}');`
    arr.push(sql);
    });
    fs.writeFile(path.join(__dirname,'books.sql'),arr.join(''),'utf8',(err) => {
      if(err) 
      {
        console.log('write error!');
      }
      console.log('init data finished!');
    });
 })