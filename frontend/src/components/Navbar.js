import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleLogout = () => {
        logout()
    }

    return (
        <header>
            <div className="header-container">
                <Link to="/" className="header-title-link">
                    <h1 className="header-title-text">My Workouts</h1>
                </Link>
                <nav>
                    {user && (
                        <div className="user-state">
                            <span>{user.email}</span>
                            <button onClick={handleLogout} className="logout-btn">Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className="nav-links">
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/signup" className="nav-link">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;