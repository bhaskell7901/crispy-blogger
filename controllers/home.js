const router = require('express').Router();
const { Account, Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Home page
router.get('/', withAuth, (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});


// Login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Login post
router.post('/login', async (req, res) => {
  try {
    const accountData = await Account.findOne({ where: { username: req.body.username } });

    if (!accountData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await accountData.checkPassword(req.body.password);
  
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }
  
      // Create session variables based on the logged in user
      req.session.save(() => {
      req.session.userId = accountData.id;
      req.session.loggedIn = true;
      
      res.json({ user: accountData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Account create page
router.get('/create', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('create');
});

// Account create post
router.post('/create', async (req, res) => {
  try {
    const accountData = await Account.create({
      username: req.body.username,
      password: req.body.password
    });

    if (!accountData) {
      res
        .status(400)
        .json({ message: 'Invalid username or password, please try again' });
      return;
    }
  
      // Create session variables for the newly create user
      req.session.save(() => {
      req.session.userId = accountData.id;
      req.session.loggedIn = true;
      
      res.json({ user: accountData.username, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
      req.session.destroy(() => {
          res.status(204).end();
      });
  } else {
      res.status.apply(404).end();
  }
});

module.exports = router;