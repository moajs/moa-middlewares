var app = {
  use:function(i){
    console.log('use ' + i);
  }
}
// console.log(2)
// var $middlewares = require('./')(app);
// console.dir($middlewares)

var $middlewares = require('./')(app,'app/m2');


console.dir($middlewares)

$middlewares.mount($middlewares.m2);
