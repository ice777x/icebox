import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Film from "./components/Film";
import Layout from "./Layout";
import About from "./components/About";
import FilmPlayer from "./components/FilmPlayer";
import Search from "./components/Search";
import "./index.css";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index={true} element={<App />} />
                    <Route path="film" element={<Film />} />
                    <Route path="film/:url" element={<FilmPlayer />} />
                    <Route path="about" element={<About />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);
