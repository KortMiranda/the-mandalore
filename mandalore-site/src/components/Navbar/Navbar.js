import React from 'react';
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'

function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <ul className="nav-links">
                    <li>
                        <Link to="/">The Mandalore</Link>
                    </li>
                    <li>
                        <Link to="/merch">Merch</Link>
                    </li>
                    <li>
                        <Link to="/armor">Armor</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;