import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function RouteAuthenticated(){

    const { isAuthenticated } = useContext(AuthContext);

    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }

    return <Outlet/>;
};