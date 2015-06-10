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
  
  // console.log(this.middlewares);
  
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
  // console.log(typeof middlewares);
  var _middlewares  = this.middlewares;
  // var _mount_one    = this.mount_one;
  var _app = this.app;
  if(typeof middlewares == 'array' || typeof middlewares == 'object'){
    console.log('array')
    console.dir(_middlewares)
    
    middlewares.forEach(function(i){
      console.log('mount m = ' + i);
      // console.dir(_middlewares[i]);
      var m = _middlewares[i];
       console.dir(m);
      // _mount_one(m);
      _mount_one(_app, m);
    });
  }else if(typeof middlewares == 'function'){
    debug('function')
    var m = middlewares;
    
    // this.mount_one(m);
    _mount_one(_app, m);
  }else{
    console.error('cant mount this middlewares!');
  }
}

Middlewares.prototype.mount_one = function(middleware) {
  console.dir(this)
  this.app.use(middleware);
};


function _mount_one(app, middleware) {
  app.use(middleware);
};


Middlewares.prototype.toObject = function() {
  var requireDirectory = require('require-directory');
  var middlewares = requireDirectory(module, this.dir);
  
  this.middlewares = middlewares;
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

// ------- public 
module.exports = function (app, dir) {
  var _dir = "/app/middlewares";

  if(app.root_path){
    _dir = app.root_path + "/app/middlewares";
  }

  if (arguments[1]) {
    _dir = dir;
  }
  
  return new Middlewares(app, _dir);
};