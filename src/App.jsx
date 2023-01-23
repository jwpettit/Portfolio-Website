// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Templanding from "./pages/Templanding";

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Templanding />}></Route>
            </Routes>
        </div>
    );
}
