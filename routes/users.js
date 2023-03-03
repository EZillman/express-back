var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'Choco', password: 'Marabou'},
  {id: 2, name: 'Hazel', password: 'Nutella'},
  {id: 3, name: 'Coco', password: 'Coconut'},
  {id: 4, name: 'Vanilla', password: 'Cake'},
  {id: 5, name: 'Orange', password: 'Cookie'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:userId', function(req, res, next) {
  userId = req.req.Params.userId;

  findUser = users.find(user => user.id == userId);

  res.json(findUser);
});

router.post('/', function(req, res, next) {
 

  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);

  res.json(users);
});

router.get('/test', function(req, res, next) {
  res.send('test router');
});

module.exports = router;
