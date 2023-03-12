import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

/*eslint-disable*/
function App() {
    return (
        <div className="App tm-bg-img-header">
            <Header />
            <main>
    
            </main>
            {/* <About />
            <Login />
            <Register /> */}
            <Home/>
        </div>
    );
}

export default App;
