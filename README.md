# Week 2
# Class07- Lab06
# Bearer Auth
## Deployment Test
### Author: Boshra Jaber
* [tests report](https://github.com/BoshraJaber/bearer-auth/actions)
* [Heroku application for main branch](https://boshra-bearer-auth.herokuapp.com/)
* [Pull Request to main](https://github.com/BoshraJaber/bearer-auth/pull/1)

## Setup
- `.env` requirements:
 * PORT - 3000
 * MONGODB_URI=mongodb://localhost:27017/auth
 * SECRET='somesecret'

- Install Required Packages:
  * `npm i express dotenv base-64 bcrypt mongoose jsonwebtoken morgan express-session fs`
  * `npm i -D @code-fellows/supergoose eslint jest`
  * `npm i -g nodemon`
- Running the app
 * `npm start` or `nodemon`
 1. Endpoint: `/signup`
   * Returns Object:
  ```
  {
   "username" : "Boshra"
   "token": "Generated token"
  }
  ```
 2. Endpoint: `/signin`
   * Returns Object:
  ```
  {
   "username" : "Boshra"
   "password": "Generated token"
    }
  ``` 
 3. Endpoint: `/error`
   * Returns Object:
  ```
  {
   "error": "Something went wrong!",
   "route": "/error",
   "message": "Error with the server"
   }
  ```
 4. Endpoint: `/random`
   * Returns Object:
  ```
  {
   "error": 404,
   "route": "/",
   "message": "Not Found"
   }
  ```
  5. Endpoint: `/users`
   * Returns Object:
  ```
  {
   "error": 404,
   "route": "/",
   "message": "Not Found"
   }
  ```



- In package.json file add:
  ```
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon",
    "test": "jest --coverage --verbose ",
    "lint": "eslint '**/*.js'"
  }
  ```

## Tests
Unit Tests: `npm run test`
Lint Tests: `npm run lint`

## UML:
Here is a UML of my code: 
![](./src/lab6.png)