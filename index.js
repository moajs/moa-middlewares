/*!
 * Moajs MiddleWares
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */
var debug = require('debug')('moa-middlewares');

function Middlewares(app, dir) {
  this.app = app;
  this.dir = dir;

  debug('moa-middlewares mount dir %s', this.dir);
  this.toObject();
  
  return this;
};

Middlewares.prototype.dir = function(dir) {
  if (!arguments[0]) {
    this.dir = "app/middlewares";
  } else {
    this.dir = dir;
  }
  
  this.toObject();
  
  return this;
}

Middlewares.prototype.mount = function(middlewares) {
  console.log(typeof middlewares);
  
  if(typeof middlewares == 'array'){
    debug('array')
    
    middlewares.forEach(function(i){
      console.log('mount m = ' + i);
      var m = middlewares[i];
      
      this.mount_one(m);
    });
  }else if(typeof middlewares == 'function'){
    debug('function')
    var m = middlewares;
    
    this.mount_one(m);
  }else{
    console.error('cant mount this middlewares!');
  }
}

Middlewares.prototype.mount_one = function(middleware) {
  this.app.use(middleware);
};


Middlewares.prototype.toObject = function() {
  var requireDirectory = require('require-directory');
  var middlewares = requireDirectory(module, this.dir);
  
  _extend(this, middlewares);
}

// ------ private 
function _extend(des, src) { 
  if (!des) { 
    des = {}; 
  } 
  if (src) { 
    for (var i in src) { 
      des[i] = src[i]; 
    } 
  } 
	
  return des; 
} 

module.exports = function (app, dir) {
  var _dir = "app/middlewares";
  
  if (arguments[1]) {
    _dir = dir;
  }
  
  return new Middlewares(app, _dir);
};