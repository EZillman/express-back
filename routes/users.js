var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'Choco'},
  {id: 2, name: 'Hazel'},
  {id: 3, name: 'Coco'},
  {id: 4, name: 'Vanilla'},
  {id: 5, name: 'Orange'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/test', function(req, res, next) {
  res.send('test router');
});

module.exports = router;
