var express = require('express');
var router = express.Router({});
let util = require("./../util/util");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: '登录' });
});
//存放数据
// let users = [];

router.post("/",(req,res,next)=>{
    //1.获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;
    //2.处理数据
    //2.1生成用户注册对象
    let loginUser = {
        userName: userName,
        loginPwd: loginPwd
    };
    //2.2验证用户是否被注册
    let user = util.isReg(loginUser,util.users);
    if(null !== user && undefined !== user){
        //匹配到用户
        console.log(user.loginPwd);
        if(user.loginPwd === loginPwd){
            res.redirect('/chat');
        }else{
            res.send("密码错误");
        }
    }else{
        res.send("当前的用户不存在")
    }
});

module.exports = router;
