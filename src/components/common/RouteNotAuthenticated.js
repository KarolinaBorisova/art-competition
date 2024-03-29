import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function PrivateRoute(){

    const { isAuthenticated } = useContext(AuthContext);

    if(isAuthenticated){
        return <Navigate to="/error" replace/>
    }

    return <Outlet/>;
};