import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () =>{
    let auth = {'token': sessionStorage.getItem("Auth")};

    return(
        auth.token ? <Outlet/> : <Navigate to="/" />
    )
}

export default PrivateRoutes;
