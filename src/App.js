import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout"
import Create from "./components/Create/Create"
import { Routes, Route, useNavigate } from 'react-router-dom';
import Categories from "./components/Header/Categories/Categories";
import Error from "./components/Error/Error";
import { AuthContext } from "./contexts/AuthContext";
import { DrawingContext } from "./contexts/DrawingContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";
import EditDrawing from "./components/EditDrawing/EditDrawing";
import DetailDrawing from "./components/DetailDrawing/DetailDrawing"



// import DrawingDetail from "./components/DrawingDetail/DrawingDetail";


/*eslint-disable*/
function App() {

    const [auth, setAuth] = useLocalStorage('auth',{});
    const [drawings, setDrawings] = useState([]);
    const navigate = useNavigate();

    const userLogin = (authData) => {
        setAuth(authData);
    }
    const userLogout = () => {
        setAuth({});
    }

    const addDrawing = (drawingData) => {
        setDrawings(state => [
            ...state,
            drawingData
        ]);
        
        navigate('/');
    }

  
    return (
        <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
            <div className="App tm-bg-img-header">
                <Header />

                <DrawingContext.Provider value={{drawings, addDrawing}}>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/drawings/:drawingId/edit" element={<EditDrawing/>} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/error" element={<Error />} />
                        <Route path="/logout" element={<Logout/>} />
                        <Route path="/gallery/:drawingId" element={ <DetailDrawing/>}/>
                        
                    </Routes>
                </main>
                </DrawingContext.Provider>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
