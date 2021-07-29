const express = require('express');
const router = express.Router();

//User model
let User = require('../../models/Users');

// @route GET api/users
router.get('/', (req, res) => {
  User.find()
  .sort({date: -1})
  .then(users => res.json(users))
  .catch(err => Response.status(400).json(err));
})

// @route POST api/users
router.post('/', (req, res) => {
  const newUser = new User({
    username: req.body.username
  });
  newUser.save().then((users) => res.json(users));
})

// @route DELETE api/users
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

module.exports = router;