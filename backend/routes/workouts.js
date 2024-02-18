const express = require('express')
const {
    createWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: "GET all workouts" })
})

// GET a sinle workout
router.get('/:id', (req, res) => {
    res.json({ mssg: "GET a single workout" })
})

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', (req, res) => {
    res.json({ mssg: "Delete a workout" })
})

// Update a new workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: "Update a workout" })
})

module.exports = router