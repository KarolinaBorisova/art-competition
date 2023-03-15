import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout"
import Create from "./components/Create/Create"
import { Routes, Route } from 'react-router-dom';
import Categories from "./components/Header/Categories/Categories";
import Error from "./components/Error/Error";
import { AuthContext } from "./contexts/AuthContext";
import {useState} from 'react'
import { useLocalStorage } from "./hooks/useLocalStorage";
// import DrawingDetail from "./components/DrawingDetail/DrawingDetail";


/*eslint-disable*/
function App() {

    const [auth, setAuth] = useLocalStorage('auth',{});

    const userLogin = (authData) => {
        setAuth(authData);
    }
    const userLogout = () => {
        setAuth({});
    }

    return (
        <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
            <div className="App tm-bg-img-header">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/error" element={<Error />} />
                        <Route path="/logout" element={<Logout/>} />
                        {/* <Route path="/gallery/:drawingId" element={ <DrawingDetail/>}/> */}
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
