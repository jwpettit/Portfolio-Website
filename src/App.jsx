import "./App.css";
import "./assets/fonts/DINR____.TTF";
import "./assets/fonts/DINB____.TTF";
import "./assets/fonts/DIN Medium.ttf";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Invalid from "./pages/Invalid";
import ReactGA from "react-ga";

const GAKey = process.env.REACT_APP_GA_TRACKINGID;

ReactGA.initialize(GAKey);

export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path="work/" element={<Work />} />
                    <Route path="about/" element={<About />} />
                    <Route path="contact/" element={<Contact />} />
                    <Route path="*" element={<Invalid />} />
                </Route>
            </Routes>
        </div>
    );
}
