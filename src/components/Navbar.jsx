// UTILITY
import { NavLink } from "react-router";


// COMPONENT EXPORT

export default function Navbar({ children }) {
    return <>
        <nav className="debug">
            <div className="container">
                <NavLink to="/" className="debug">Posts</NavLink>
                <NavLink to="/about" className="debug">About</NavLink>
            </div>
        </nav>
    </>
}