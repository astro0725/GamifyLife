function checkAuthentication(req, res, next) {
  if (req.session.userId) {
    next(); 
  } else {
    res.render('signup');
  }
}

module.exports = checkAuthentication;