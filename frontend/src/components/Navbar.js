import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <Link to="/" className="header-title-link">
                    <h1 className="header-title-text">My Workouts</h1>
                </Link>
                <nav>
                    <div className="nav-links">
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/signup" className="nav-link">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;