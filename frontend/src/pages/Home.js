import { useEffect, useState } from "react"


const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('api/workouts')
            const jsonData = await response.json()

            if (response.ok) {
                setWorkouts(jsonData)
            }
        }

        fetchWorkouts()
    }, [])
    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <p key={workout._id}>{workout.title}</p>
                ))}
            </div>
        </div>
    )
}
export default Home