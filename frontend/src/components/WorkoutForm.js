import { useState } from "react";

const WorkoutForm = () => {
    const [title, setTile] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts', {
            method: 'POSt',
            body: JSON.stringify(workout),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const jsonData = await response.json()

        if (!response.ok) {
            setError(jsonData.error)
        }
        if (response.ok) {
            setTile('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New workout added')
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exersize Title:</label>
            <input
                type="text"
                onChange={(e) => setTile(e.target.value)}
                value={title} />

            <label>Load (in kg):</label>
            <input
                type="text"
                onChange={(e) => setLoad(e.target.value)}
                value={load} />
            <label>Reps:</label>
            <input
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={reps} />

            <button>Add Workout</button>
        </form>
    );
}

export default WorkoutForm;