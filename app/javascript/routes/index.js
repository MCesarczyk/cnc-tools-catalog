import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "../components/Articles";
import Home from "../components/Home";
import Tools from "../components/Tools";

const Router = () => (
    <BrowserRouter>
        <Home>
            <Routes>
                <Route path="/" element={<Tools />} />
                <Route path="/stock" element={<Articles />} />
                <Route path="/contact" element={<div>CONTACT</div>} />
            </Routes>
        </Home>
    </BrowserRouter>
);

export default Router;