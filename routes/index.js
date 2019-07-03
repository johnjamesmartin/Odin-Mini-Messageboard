const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hey everyone',
    user: 'Alice'
  },
  {
    text: 'Everyone doing well?',
    user: 'Bob'
  }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages
  });
});

router.get('/new', (req, res) => {
  res.render('new', { title: 'New' });
});

module.exports = router;
