import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import "./Header.css"

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <div id="top" className="tm-header-container">
            <div className="row tm-site-header">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-xs-center">
                    <h1 className="tm-site-title">Rainbow Art Competition 2023</h1>
                    {user.email
                     ? <div className="user-email">Hello {user.username? user.username : user.email}</div>
                    : null}
                </div>
            </div>
            <div className="row tm-navbar-row tm-navbar-row-absolute">
                <div className="tm-navbar-container">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <nav className="navbar navbar-full">
                            <div className="text-xs-center tm-navbar-rounded" id="tmNavbar">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/categories">
                                            Age categories
                                        </Link>
                                    </li>
                                    {user?.accessToken
                                        ? <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/create">
                                                    Add drawing
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/logout">
                                                    Logout
                                                </Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/login">
                                                    Login
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link external" to="/register">
                                                    Registration
                                                </Link>
                                            </li>
                                        </>
                                    }
                                </ul>
                            </div>
                        </nav>
                    </div>{" "}
                </div>{" "}
            </div>
        </div>
    )
}