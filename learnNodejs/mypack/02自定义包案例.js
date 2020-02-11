/**
 * 自定义包
 * 包的规范
 * 1、package.json必须在包的顶层目录下
 * 2、二进制文件应该在bin目录下
 * 3、javascript代码应该在lib目录下
 * 4、文档应该在doc目录下
 * 5、单元测试应该在test目录下
 */
//  入口文件
const path = require('path');
const fs = require('fs');
const md = require('markdown-it')();

let tplPath = path.join(__dirname,'template.html');
let mdPath = path.join(__dirname,'demo.md');
let targetPath = path.join(__dirname,'demo.html');
//获取markdown文件
fs.readFile(mdPath,'utf8',(err,data) => {
  if(err) return;
  //对markdown内容进行转换
  let res = md.render(data);
  //读取模板内容
  let tpl = fs.readFile(tplPath,'utf8',(err,tplData) => {
    if(err) return;
    tplData = tplData.replace('<%content%>',res);
    //生成的最终页面写入目标文件
    fs.writeFile(targetPath,tplData,err => {
      console.log("转换完成！")
    });
  })
})