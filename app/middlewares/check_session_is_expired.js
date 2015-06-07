var check_session_is_expired;

module.exports = check_session_is_expired = function(req, res, next) {
  console.log('no session user');
  next();
};