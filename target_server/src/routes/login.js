const express = require('express');
const router = express.Router();
const {login} = require('../lib/helpers');
const pool = require('../database');

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  const users = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  if(users.length == 0) {
    res.redirect('/login');
  } else if (users[0].password != password) {
    res.redirect('/login');
  } else {
    req.session.user = users[0];
    console.log(req.session);
    res.redirect('/home');
  }
});

router.get('/home', login, (req, res) => {
  res.render('home');
});

router.get('/logout', login, (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

router.get('/edit', login, (req, res) => {
  res.render('edit');
});

router.post('/edit', login, async (req, res) => {
  await pool.query('UPDATE users SET email = ? WHERE id = ?', [req.body.email, req.session.user.id]);
  req.session.user.email = req.body.email
  console.log(req.get('origin'));
  console.log(req.session);
  res.send('email changed');
});

module.exports = router;
