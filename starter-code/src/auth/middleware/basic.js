'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {

  if (!req.headers.authorization || !req.headers.authorization === 'Basic') { //added a second condition
    // return _authError(); 
     next('Invalid User')
     return;
  }

  try {
    let basic = req.headers.authorization.split(' ').pop(); // added split and pop
    let [user, pass] = base64.decode(basic).split(':');


    req.user = await User.authenticateBasic(user, pass);

    // const token = User.generateToken(req.user) // generate a token to return it instead of the user
    // let token = req.user.token;
    // req.token = user.token;
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }
}


