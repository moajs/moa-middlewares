#!/usr/bin/env node


var request = require('supertest')
  , express = require('express');

var app = express();

app.get('/user', function(req, res){
  res.send(201, { name: 'tobi' });
});
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

// var $middlewares = require('../')(app);
//
// middlewares.mount([
//   'cors'
// ])

// $middlewares['cors']
// $middlewares.cors
//
// app.use($middlewares['cors']);


request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '20')
  .expect(201)
  .end(function(err, res){
    if (err) throw err;
    console.log('done');
    process.exit();
  });
