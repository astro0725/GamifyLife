function checkAuthentication(req, res, next) {
  if (req.session.userId) {
    next(); 
  } else {
    res.render('signUp');
  }
}

module.exports = checkAuthentication;