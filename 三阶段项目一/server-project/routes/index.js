var express = require('express');
var router = express.Router();
const {find} = require('../../cwel/db')

/* GET home page. */
router.get('/alldatar',async function(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('r');
  res.json(data);
});
router.get('/alldatasr',async function(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('sr');
  res.json(data);
});
router.get('/alldatassr',async function(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('ssr');
  res.json(data);
});
router.get('/alldatasp',async function(req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  let data = await find('sp');
  res.json(data);
});

module.exports = router;
