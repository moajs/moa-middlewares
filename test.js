var app = {}
console.log(2)
var $middlewares = require('./')(app);
//
// middlewares.mount([
//   'cors'
// ])
  
console.dir($middlewares)