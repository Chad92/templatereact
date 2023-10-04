import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
// import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Pokedex from "../pages/Pokedex"

 const AppRoutes = 
 <Route path="/" element={<Pokedex/>} errorElement={<ErrorPage/>}> 
 {/* mettre le main layout normalement pour les projets a plusieurs pages */}
    <Route path={"home"} element={<Home/>}/>
</Route>

;

export default AppRoutes;