import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create"
import {Routes , Route} from 'react-router-dom';
import Categories from "./components/Header/Categories/Categories";
import Error from "./components/Error/Error";
// import DrawingDetail from "./components/DrawingDetail/DrawingDetail";


/*eslint-disable*/
function App() {
    
    return (
        <div className="App tm-bg-img-header">
            <Header />
            <main>
             <Routes>
                 <Route path="/" element={ <Home/>}/>
                 <Route path="/login" element={ <Login/>}/>
                 <Route path="/register" element={ <Register/>}/>
                 <Route path="/create" element={<Create/>}/>
                 <Route path="/gallery" element={<Gallery/>}/>
                 <Route path="/categories" element={ <Categories/>}/>
                 <Route path="/error" element={ <Error/>}/>
                 {/* <Route path="/gallery/:drawingId" element={ <DrawingDetail/>}/> */}
             </Routes>
            </main>       
        </div>
    );
}

export default App;
