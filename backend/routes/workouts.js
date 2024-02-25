const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

///// Verifies the user before showing the rest of the website content///// 
router.use(requireAuth)
///// Verifies the user before showing the rest of the website content///// 

// GET all workouts
router.get('/', getWorkouts)

// GET a sinle workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', deleteWorkout)

// Update a new workout
router.patch('/:id', updateWorkout)

module.exports = router