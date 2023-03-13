import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {Routes , Route} from 'react-router-dom';

/*eslint-disable*/
function App() {
    return (
        <div className="App tm-bg-img-header">
            <Header />
            <main>
             <Routes>
                 <Route path="/" element={ <Home/>}/>
             </Routes>
            </main>
            {/* <About />
            <Login />
            <Register /> */}
           
        </div>
    );
}

export default App;
