import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPageView from "./pages/LandingPageView";
import FlightInfo from "./pages/FlightInfo";

export default function AppRoutes(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPageView/>} />
                <Route path='/view-flight-info' element={<FlightInfo/>} />
            </Routes>
        </BrowserRouter>

    );
}