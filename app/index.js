var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json('its workinng (api routee)');
});

router.get('*', function(req, res) {
  res.render('index');
});

module.exports = router;
