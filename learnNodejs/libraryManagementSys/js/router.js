/**
 * 路由模块
 */

const express = require('express');
const router = express.Router();
const service = require('./service.js') ;

//路由处理函数
  //渲染主页
router.get('/',service.showIndex);
  //添加图书（跳转到添加图书的页面）
router.get('/toAddBook',service.toAddBook);
  //添加图书（提交表单）
router.post('/addBook',service.addBook);
  //修改图书（跳转到编辑书籍的页面）
router.get('/toEditBook',service.toEditBook);
  //修改图书（提交表单数据）
router.post('/editBook',service.editBook);
  //删除图书
router.get('/deleteBook',service.deleteBook);
module.exports = router;