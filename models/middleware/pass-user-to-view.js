// middleware/pass-user-to-view.js

const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? req.session.user : null
    next()
  }
  
  module.exports = passUserToView
  
  //if a user is signed in, it will set the user as the user key and local object. 