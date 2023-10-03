import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

 const AppRoutes = <Route path="/" element={<MainLayout/>} errorElement={<ErrorPage/>}>
    <Route path={"home"} element={<Home/>}/>
</Route>;

export default AppRoutes;