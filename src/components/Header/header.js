import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'


const Header = ()=>{

    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg p-1">
                <Link className="navbar-brand" to="/">
                    <div className="logo pt-3">
                        <p className="icon">
                            $m
                        </p>
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerNav">
                    Login / Register
                </button>
                <div className="collapse navbar-collapse " id="headerNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mr-5">
                            <Link className="nav-link p-2" id="login" to="/myorders">My Orders</Link>
                        </li>
                        <li className="nav-item active mr-5">
                            <Link className="nav-link p-2" id="login" to="#">Login</Link>
                        </li>
                        <li className="nav-item mr-5">
                            <Link className="nav-link p-2" id="register" to="#">Create an account</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Header;