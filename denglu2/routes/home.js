var express = require('express');
var router = express.Router();
var db=require('../module/db');
var infosql='SELECT * FROM tab_data';

/* GET home page. */
router.get('/', function(req, res) {
    db.query(infosql,["%"],function (rows) {
        console.log(rows);
        res.render('home', { info:rows});
    });
});

module.exports = router;
