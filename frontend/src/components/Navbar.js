import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="header-container">
                <Link to="/" className="header-title-link">
                    <h1 className="header-title-text">My Workouts</h1>
                </Link>
            </div>
        </header>
    );
}

export default Navbar;