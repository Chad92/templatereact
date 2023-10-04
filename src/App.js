import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import React from "react";
import AppRoutes from "../src/routing/AppRoutes";
import "./styles/index.scss";


const router = createBrowserRouter(
    createRoutesFromElements(
        AppRoutes
    )
    
);

const App = () => <RouterProvider router={router} />
;

export default App;

