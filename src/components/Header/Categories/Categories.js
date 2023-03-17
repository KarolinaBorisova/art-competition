import { Link } from "react-router-dom"
import './Categories.css';

export default function Categories() {

    const goToCategory = (e) => {
   
        var path = e.currentTarget.value;
        console.log(path);
    }


    return (
        <nav className="navbar navbar-full">
            <div className="text-xs-center tm-navbar-rounded" id="tmNavbar">
                <ul className="nav navbar-nav category">
                    <li className="nav-item category">
                        <button className="nav-link" value="Igroup" onClick={goToCategory}>
                            I group
                            <p className="nav-link years">3 - 4 years</p>
                        </button>

                    </li>
                    <li className="nav-item category">
                        <Link className="nav-link" to="/category/IIgroup">
                            II group
                            <p className="nav-link years">4 - 5 years</p>
                        </Link>
                    </li>
                    <li className="nav-item category">
                        <Link className="nav-link" to="/category/IIIgroup">
                            III group
                            <p className="nav-link years">5 - 6 years</p>
                        </Link>
                    </li>
                    <li className="nav-item category">
                        <Link className="nav-link" to="/category/IVgroup">
                            IV group
                            <p className="nav-link years">6 - 7 years</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}