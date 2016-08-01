var express = require('express');
var router = express.Router();
var Logins = require('../models/logins');

/* GET users listing. */
router.get('/', function(req, res, next){
    Logins
        .find()
        .limit(10)
        .exec((err,data)=>{
            if (err) 
                {
                    res.send('error!')
                } 
            else 
                {
                    res.json(data)
                }
        });
})
    .post('/:username/:password', function(req, res, next){
        var user = new Logins({username:req.params.username, password: req.params.password});
        user.save(function(err, data){
           if(err)
            {
                res.send('Error!');
            }
           else
            {
                res.json(data);
            }
        });
    })
    .put('/:id/:newPassword', function(req, res, next){
        Logins 
            .where('_id').equals(req.params.id)
            .update({$set: {password:req.params.newPassword}})
            .exec((err,data)=>{
                if (err) {
                    res.send('error!')
                  } else {
                    res.json(data)
                }
            })
    })
    .delete('/:id', function(req, res, next){
        Logins
            .where('_id').equals(req.params.id)
            .remove()
            .exec((err, data)=>{
                if(err)
                    {
                        console.log('Error!');
                    }
                else
                    {
                        res.json(data);
                    }
            })
    })

module.exports = router;
