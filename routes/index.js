var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/work', function(req, res){
  res.render('work', {
    title: 'Work'
  });
});

router.get('/error', function(req, res){
  res.render('error', {
    title: 'Error'
  });
});

module.exports = router;
