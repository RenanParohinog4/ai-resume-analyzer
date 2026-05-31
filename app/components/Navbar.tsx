import React from 'react'
import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                <p className="font-bold text-gradient">Resume Evaluator AI</p>
            </Link>
            <Link className="primary-button  w-fit" to="/upload">Upload Resume</Link>
        </nav>
    )
}
export default Navbar
