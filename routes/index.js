var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Iemphour' });
});

router.get('/register', function(req, res, next){
   res.render('register', {title:'Create New Account'}); 
});

module.exports = router;
