import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import About from "./components/About";
import FilmPlayer from "./components/FilmPlayer";
import Search from "./components/Search";
import "./index.css";

const Film = React.lazy(() => import("./components/Film"));

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="film"
                        element={
                            <Suspense
                                fallback={
                                    <div className="w-full h-screen flex bg-black">
                                        Loading...
                                        <i className="fas fa-spinner fa-pulse"></i>
                                    </div>
                                }
                            >
                                <Film />
                            </Suspense>
                        }
                    />
                    <Route index={true} element={<App />} />
                    <Route path="film/:url" element={<FilmPlayer />} />
                    <Route path="about" element={<About />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
);
