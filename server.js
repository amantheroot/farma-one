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

  query = 'SELECT * FROM stocks';
  connection.query(query, function(err,rows,fields) {
    if (err) throw err;
    
    data['stocks'] = rows;

    res.send(JSON.stringify(data));
  });
});

app.post('/api/email', function(req, res) {
  const emailText = JSON.stringify(req.body);

  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'iamnotdannydevito@gmail.com',
      pass: 'IAMDANNYDEVITO'
    }
  });

  const mailOptions = {
    from: 'iamnotdannydevito@gmail.com',
    to: 'amantheroot@gmail.com',
    subject: 'Order Placed! YAY!',
    text: emailText
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(JSON.stringify({'success': 'drink beer and congratulations!'}));
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
