var express = require('express');
var router = express.Router();
var db=require('../module/db');
/* GET home page. */
router.get('/', function(req, res) {
    db.query("select * from tab_user",function(rows)
    {
        console.log(rows);
    });
    res.render('index1',{});
});
router.post('/',function(req,res){

    let username = req.body.username;
    let password = req.body.password;
    let login_sql = "SELECT * FROM tab_user Where username=? and password=? ";
    db.query(login_sql,[username,password],function(rows){
        console.log(rows);
        if(rows!=null&&rows.length>0){
            //登录成功
            res.redirect('home');
        }else{
            //登录失败
            req.flash('error',"用户名或者密码错误");
            res.redirect('login');
        }
    });
});

module.exports = router;