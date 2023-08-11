// RUN APP: nodemon app.js
const express = require('express');
const path = require('path');

// express app instance
const app = express();
// middleware function
app.use(express.urlencoded({extended: true}));
// json
app.use(express.json());

// defining location of dir
app.use(express.static(__dirname + '/www'));
let formPath = path.resolve('./www/form.html');
let accountPath = path.resolve('./www/account.html');

// listen for request - start server
app.listen(3000, () => {
  console.log('Server started');
  console.log(formPath);
  console.log(accountPath);
});

// Form route
app.get('/', (req, res) => {
  res.sendFile(formPath);
});

// Form route
app.get('/account', (req, res) => {
  res.sendFile(accountPath);
});

// Login route with credentials array
app.post('/api/login', (req, res) => {
  let users = [
    {email: 'joe@email.com', pwd: 'qwerty', dob: '10/10/00', age: 22, username: 'joe', valid: true},
    {email: 'joe@email.com', pwd: 'qwerty', dob: '10/10/00', age: 22, username: 'joe', valid: true},
    {email: 'joe@email.com', pwd: 'qwerty', dob: '10/10/00', age: 22, username: 'joe', valid: true},
  ];
  // not found response
  if (!req.body) {
    return res.sendStatus(400);
  }
  // creating customer object
  let customer;
  customer = {};
  // Assigning email and password
  customer.email = req.body.email;
  customer.upwd = req.body.upwd;
  // setting default false
  customer.valid = req.body.valid;

  // loop thru users array to check if customer is valid
  function getAuth() {
    for (let i = 0; i < users.length; i++) {
      if (req.body.email === users[i].email && req.body.upwd === users[i].pwd) {
        customer.valid = true;
      }
    }
  }

  res.send(customer);
});


