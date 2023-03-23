// import logo from './logo.svg';
import "./App.css";
import "./assets/fonts/DINR____.TTF";
import "./assets/fonts/DINB____.TTF";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing"
import About from "./pages/About"
import Invalid from "./pages/Invalid"


export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout
                />} >
                    <Route index element={<Landing />} />
                    <Route path="about/" element={<Results />} />
                    <Route path="*" element={<Invalid />} />
                </Route>
            </Routes>
        </div>
    );
}
