const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', (req, res) => {
  burger.all(data => {
    const hbsObject = { burgers: data };
    return res.render('index', hbsObject);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.create(
    ['burger_name', 'devoured'],
    [req.body.burger_name, req.body.devoured],
    result => {
    return res.json(result);
    }
  );
});

router.put('/api/burgers/:id', (req, res) => {
  const cond = { id: req.params.id };
  burger.update('devoured', req.body.devoured, cond, result => {
    return res.json(result);
  });
});

module.exports = router;
