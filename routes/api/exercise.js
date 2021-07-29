const express = require('express');
const router = express.Router();

// Exercise model
const Exercise = require('../../models/Exercise');

// @router GET /api/exercises
router.get('/', (request, response) => {
  Exercise.find()
  .then(exercise => response.json(exercise))
  .catch(err => response.status(400).json(err))
})

// @router POST /api/exercises
router.post('/', (request, response) => {
  const username = request.body.username;
  const description = request.body.description;
  const duration = Number(request.body.duration);
  const date = Date.parse(request.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  newExercise.save()
    .then(() => response.json('Exercise added'))
    .catch(err => response.status(400).json(err));
})

// @router GET /api/exercises/id
router.get('/:id', (request, response) => {
  Exercise.findById(request.params.id)
  .then(exercise => response.json(exercise))
  .catch(err => response.status(400).json(err))
})

// @route DELETE api/exercises/id
router.delete('/:id', (req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => exercise.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
})

// @route UPDATE api/exercise/update/id
router.post('/update/:id', (request, response) => {
  Exercise.findById(request.params.id)
    .then(exercise => {
      exercise.username = request.body.username,
      exercise.description = request.body.description;
      exercise.duration = Number(request.body.duration);
      exercise.date = Date.parse(request.body.date);

      exercise.save()
        .then(() => response.json('Exercise updated'))
        .catch(err => response.status(400).json(err));
    })
    .catch(err => response.status(400).json(err));
})

module.exports = router;