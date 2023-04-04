import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout"
import Create from "./components/CreateDrawing/CreateDrawing"
import { Routes, Route, useNavigate } from 'react-router-dom';
import Categories from "./components/Header/Categories/Categories";
import Error from "./components/Error/Error";
import { AuthContext } from "./contexts/AuthContext";
import { DrawingContext } from "./contexts/DrawingContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState } from "react";
import EditDrawing from "./components/EditDrawing/EditDrawing";
import DetailDrawing from "./components/DetailDrawing/DetailDrawing"
import RouteAuthenticated from "./components/common/RouteAuthenticated";
import RouteNotAuthenticated from "./components/common/RouteNotAuthenticated";
import Group from "./components/Groups/Group";





/*eslint-disable*/
function App() {

    const [auth, setAuth] = useLocalStorage('auth', {});
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
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout, isAuthenticated: Boolean(auth.accessToken) }}>
            <div className="App tm-bg-img-header">
                <Header />
                <DrawingContext.Provider value={{ drawings, addDrawing }}>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />



                            <Route path="/categories" element={<Categories />} />
                            <Route path="/error" element={<Error />} />
                            <Route path="/drawings/:drawingId" element={<DetailDrawing />} />
                            <Route path="/category/:group" element={<Group />} />

                            <Route element={<RouteNotAuthenticated />}>
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                            </Route>
                            <Route element={<RouteAuthenticated />}>
                                <Route path="/create" element={<Create />} />
                                <Route path="/drawings/:drawingId/edit" element={<EditDrawing />} />
                                <Route path="/logout" element={<Logout />} />
                            </Route>

                        </Routes>
                    </main>
                </DrawingContext.Provider>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
