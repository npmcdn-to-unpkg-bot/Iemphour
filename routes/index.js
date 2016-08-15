var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Iemphour' });
});

router.get('/register', function(req, res, next){
   res.render('register', {title:'Create New Account'}); 
});

router.get('/users/:id', function(req, res, next){
    res.render('profile', {title:'Iemphour Profile'}); 
});

module.exports = router;
