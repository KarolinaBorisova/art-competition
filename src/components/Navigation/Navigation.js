
export default function Navigation() {

    return (
        <> <div className="row tm-navbar-row tm-navbar-row-absolute">
            <div className="tm-navbar-container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <nav className="navbar navbar-full">
                        <div className="text-xs-center tm-navbar-rounded" id="tmNavbar">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#top">
                                        Drawings gallery
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-1">
                                        Competitors
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-3">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link external" href="elements.html">
                                        Registration
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tm-section-4">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>{" "}
                {/* col-xs-12 */}
            </div>{" "}
            {/* tm-navbar-container */}
        </div>
        </>);
}