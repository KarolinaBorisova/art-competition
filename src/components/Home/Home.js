import "./Home.css"
export default function Home() {

    return (
        <div className="row" id="tm-section-1">
            <div className="container">
                <section className="tm-2-col-img-text">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 tm-2-col-img">
                    <i className="fa-solid fa-palette"></i>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 tm-2-col-text">
                        <h2 className="tm-2-col-text-title">Our Contest</h2>
                        <p className="tm-2-col-text-description-about">
                            We hold this contest to give an opportunity for children to build confidence, learn new things and most important to have fun!

                        </p>
                        {/* <p>Ready to start?</p>
                        <a className="nav-link" href="/register">
                            Click HERE
                        </a> */}
                    </div>
                </section>
            </div>
        </div>
    )
}