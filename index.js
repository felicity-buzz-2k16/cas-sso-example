var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    isLoggedIn: !!req.get('SSO-Email'),
    email: req.get('SSO-Email'),
    name: req.get('SSO-Name'),
  })
})

app.get('/frontend', (req, res) => res.render('frontend'))

app.listen(process.env.PORT || 3001)
