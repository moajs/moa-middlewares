/*!
 * Moajs MiddleWares
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */

function Middlewares(app, dir) {
  this._app = app;
  
  if (!arguments[0]) {
    this.dir = "app/middlewares";
  } else {
    this.dir = dir;
  }
  
  return this.toObject();
};

Middlewares.prototype.dir = function(dir) {
  if (!arguments[0]) {
    this.dir = "app/middlewares";
  } else {
    this.dir = dir;
  }
  
  return this.toObject();
}

Middlewares.prototype.mount = function(middlewares) {
  if(typeof middlewares == 'array'){
    
  }else if(typeof middlewares == 'string'){
    
  }else if(typeof middlewares == 'function'){
    
  }else{
    
  }
}

Middlewares.prototype.toObject = function() {
  var requireDirectory = require('require-directory');
  var middlewares = requireDirectory(module, this.dir);
  return middlewares;
}

module.exports = function (app) {
  return new Middlewares(app);
};