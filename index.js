'use strict';

// Start up DB Server
const mongoose = require('mongoose');
require('dotenv').config(); // error 2
// const server = require('./src/server') // error 3
// Start the web server
require('./src/server.js').start(process.env.PORT);


const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options)
// .then(()=>{
//   server.start(process.env.PORT);
// }).catch( (e)=>{
//   console.log('__CONNECTION ERROR__', e.message);
// })





//
// const server = require('./src/server')

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     server.start(process.env.PORT);
//   }).catch((e) => {
//     console.log('__CONNECTION ERROR__', e.message);
//   });