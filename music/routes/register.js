var express = require('express');
var router = express.Router();
var db = require('../module/db');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index2',"");
});
router.post('/',function (req, res,) {
    var username = req.body.username;
    var password = req.body.password1;
    var register_sql = "select * from tab_user where username= ?";
    db.query(register_sql,[username], function (rows) {
        console.log(rows);
        if(rows!=null && rows.length >0){
            req.flash('error','该用户名已被注册');
            res.redirect('register');
        }
        else {
            var Register_sql="insert into tab_user (username,password) value(?,?)";
            db.query(Register_sql,[username,password],function(rows){
                console.log(rows);
                if(rows){
                    res.redirect('login');
                }else{
                    req.flash('error','注册失败');
                    res.redirect('register');
                }

            })
        }
    });
});

module.exports = router;