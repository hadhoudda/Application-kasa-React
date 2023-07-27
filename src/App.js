import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="https://hadhoudda.github.io/Application-kasa-React/" element={<Home />} />
                <Route path="https://hadhoudda.github.io/Application-kasa-React/about" element={<About />} />
                <Route path="https://hadhoudda.github.io/Application-kasa-React/details/:id" element={<Details />} />
                <Route path="https://hadhoudda.github.io/Application-kasa-React/*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;