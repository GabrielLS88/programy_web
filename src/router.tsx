import { Routes, Route } from "react-router-dom";
import Principal from "./Pages/Principal/App";
import Contato from "./Pages/Contato/App";
import React from "react";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    );
}

export default MainRoutes;
