//引入MySQL连接模块
const pool=require('../pool.js');
//express下的路由器
const express=require('express');
//创建空路由器
var router=express.Router();
//login接口
router.post('/reg',function(req,res){
	var obj=req.body;
	var $uname=obj.uname;
    if(!$uname){
        res.send({code:401,msg:'账号不能为空'});
        return;
    };
    var $upwd=obj.upwd;
    if(!$upwd){
        res.send({
            code:401,msg:'密码不能为空'
        });
        return;
    };
    var $phone=obj.phone;
    if(!$phone){
        res.send({
            code:401,msg:'手机不能为空'
        });
        return;
    };
    pool.query('INSERT INTO xz_user VALUES(NULL,?,?,NULL,?,NULL,NULL,0)',[$uname,$upwd,$phone],function(err,result){
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:200,msg:'恭喜您，注册成功！'});
        }
    });
})
router.post('/login',function(req,res){
	var $uname=req.body.uname;
	if(!$uname){
		res.send({code:401,msg:'用户名不存在'});
		return;
	}
	var $upwd=req.body.upwd;
	if(!$upwd){
		res.send({code:402,msg:'用户密码不存在'});
		return;
	}
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send("登陆成功");
		}else{
			res.send("登录失败");
		}
	});
});
//list接口
router.get('/list',function(req,res){
	var sql="select * from xz_user";
	pool.query(sql,function(err,result){
		if(err) throw err;
		res.send(result);
	});
});


//导出路由器
module.exports=router;

