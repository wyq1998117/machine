var express = require('express');
var router = express.Router({});
let util = require("./../util/util");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('reg', { title: '注册' });
});
//存放数据
let users = [];

router.post("/",(req,res,next)=>{
    //1.获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;
    //2.处理数据
    //2.1生成用户注册对象
    let regUser = {
        userName: userName,
        loginPwd: loginPwd
    };
    //2.2验证用户是否被注册
    let user = util.isReg(regUser,util.users);
    if(null === user || undefined === user){
        //没有注册
        util.users.push(regUser);
        res.redirect("/login");//直接跳转到登录界面
    }else{
        res.send("当前用户已经注册");
    }
});


module.exports = router;
