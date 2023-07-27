import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/Application-kasa-React" element={<Home />} />
                <Route path="/Application-kasa-React/about" element={<About />} />
                <Route path="/Application-kasa-React/details/:id" element={<Details />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;