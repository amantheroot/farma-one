const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// MYSQL
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : null,
  database : 'project_one'
});

connection.connect(err => err? console.error(err):null);

app.get('/api/data', function(req, res) {
  const data = {};
  
  let query = 'SELECT * FROM products';
  connection.query(query, function(err,rows,fields) {
    if (err) throw err;
    
    data['products'] = rows;
  });

  query = 'SELECT * FROM suppliers';
  connection.query(query, function(err,rows,fields) {
    if (err) throw err;
    
    data['suppliers'] = rows;

    res.send(JSON.stringify(data));
  });
});

function handleDataBody(body) {
  const bodyText = JSON.stringify(body);
  return bodyText;
}

app.post('/api/order', function(req, res) {
  const emailText = handleDataBody(req.body);

  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usernameisabhi@gmail.com',
      pass: 'photron2'
    }
  });

  const mailOptions = {
    from: 'usernameisabhi@gmail.com',
    to: 'farmaonein@gmail.com',
    subject: 'Order Placed! YAY!',
    text: emailText
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.end();
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
