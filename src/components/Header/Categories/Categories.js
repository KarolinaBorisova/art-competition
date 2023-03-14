import { Link } from "react-router-dom"

export default function Categories() {

    return (
        <nav className="navbar navbar-full">
            <div className="text-xs-center tm-navbar-rounded" id="tmNavbar">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery">
                            I group
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/IIgroup">
                            II group
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/IIIgroup">
                            III group
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/IVgroup">
                            IV group
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}