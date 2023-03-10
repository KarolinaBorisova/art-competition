import Navigation from "./components/Navigation/Navigation";

/*eslint-disable*/
function App() {
    return (
        <div className="App">
            <>
                <div className="tm-bg-img-header">
                    <div className="container-fluid">
                        <div id="top" className="tm-header-container">
                            {/* 1. Site Header */}
                            <div className="row tm-site-header">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-xs-center">
                                    <h1 className="tm-site-title">Rainbow</h1>
                                    <p className="tm-site-description">Art competition 2023</p>
                                </div>
                            </div>
                            {/* 2. Navigation */}
                            <Navigation />
                            {/* row */}
                        </div>{" "}
                        {/* .tm-header-container */}
                        {/* 3. About */}
                        <div className="row" id="tm-section-1">
                            <div className="container">
                                <section className="tm-2-col-img-text">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 tm-2-col-img">
                                        <i className="fa fa-5x fa-map-o" />
                                        <i className="fa fa-5x fa-rocket" />
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 tm-2-col-text">
                                        <h2 className="tm-2-col-text-title">About Our Contest</h2>
                                        <p className="tm-2-col-text-description">
                                            We hold this contest to give an opportunity for children to build confidence, learn new things and most important to have fun!

                                        </p>
                                        <p>Ready to start?</p> 
                                        <a className="nav-link" href="#tm-section-4">
                                                Click HERE
                                            </a>
                                    </div>
                                </section>
                                <section className="tm-2-col-img-text" id="tm-section-2">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 tm-2-col-text">
                                        <h2 className="tm-2-col-text-title">Lorem ipsum dolor</h2>
                                        <p className="tm-2-col-text-description">
                                            Donec mattis ipsum in erat viverra commodo. Proin sapien lacus,
                                            euismod eget nisl in, elementum posuere massa.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>{" "}
                        {/* About section, tm-section-1 & 2 */}
                    </div>{" "}
                    {/* container-fluid */}
                </div>{" "}
                {/* tm-bg-img-header */}

                {/* tm-section-contact-form */}
                {/* load JS files */}
                {/* jQuery (https://jquery.com/download/) */}
                {/* Single Page Nav (https://github.com/ChrisWojcik/single-page-nav) */}
            </>

        </div>

    );
}

export default App;
