import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar-container">
            <div className="logo-wrapper"><h1>ARCE</h1></div>
            <div className="links-wrapper">
                <Link to="/Counter">Counter</Link>
            </div>
        </div>
    )
};