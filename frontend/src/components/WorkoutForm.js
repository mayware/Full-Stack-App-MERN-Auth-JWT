import { useContext, useState } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()

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
            dispatch({ type: 'CREATE_WORKOUT', payload: jsonData })
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
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps} />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default WorkoutForm;