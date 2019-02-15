const bodyParser=require('body-parser');
const express=require('express');
const mypro=require('./routes/mypro.js');
//导入路由器
//创建web服务器
var app=express();
app.listen(3000);

//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false
}));
//托管静态文件
app.use(express.static('mypro'));
//把路由器挂载到

app.use('/mypro',mypro);

