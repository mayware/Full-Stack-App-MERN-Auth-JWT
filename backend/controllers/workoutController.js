const Workout = require('../models/workoutModel')

// To get all workouts
const getWorkouts = async (req, res) => {
    // an empty curly braces means to find all workouts
    const workouts = await Workout.find({})
}

// To get a single workout


// To create a workout
const createWorkout = async (req, res) => {
    // adding a document to the db
    const { title, load, reps } = req.body
    try {
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// To delete a workout


// To update a workout


module.exports = {
    createWorkout
}