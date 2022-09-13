import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navigate items-center  backdrop-blur shadow sticky  lg:border-b z-40 hover:z-50 dark:bg-slate-900/75 flex-none h-14 lg:px-8 top-0 transition-colors duration-500 border-slate-50/[0.08] w-full">
                <div className="text-white w-full flex items-center h-full text-lg max-w-8xl">
                    <div className="relative flex place-items-center w-full items-center">
                        <img
                            src={
                                "https://i.pinimg.com/originals/b6/ad/17/b6ad17955d0be50a81847f066063e895.png"
                            }
                            alt=""
                            className="h-9 pl-3 mr-3"
                        />
                        <NavLink to={"/"} className="text-xl">
                            icebox
                        </NavLink>
                        <div className="relative sm:flex hidden ml-auto pr-7">
                            <nav className="leading-6 text-sm  space-x-8 dark:text-slate-200">
                                <NavLink
                                    to={"/search"}
                                    className="hover:text-sky-500"
                                >
                                    Search
                                </NavLink>
                                <NavLink
                                    to={"/film"}
                                    className="hover:text-sky-500"
                                >
                                    Film
                                </NavLink>
                                <NavLink
                                    to={"/about"}
                                    className="hover:text-sky-500"
                                >
                                    About
                                </NavLink>
                            </nav>
                            <div className="flex border-l border-slate-200 ml-6 pl-6 items-center">
                                <a
                                    href={"https://github.com/ice777x"}
                                    className="ml-6 block text-slate-400 hover:text-slate-200"
                                >
                                    <svg
                                        viewBox="0 0 16 16"
                                        className="w-5"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div
                            className="relative flex sm:hidden ml-auto pr-4"
                            onClick={handleClick}
                        >
                            <i
                                className={
                                    click
                                        ? "fa-solid fa-xmark"
                                        : "fa-solid fa-bars"
                                }
                            ></i>
                        </div>
                    </div>
                </div>
                <nav
                    className={
                        click
                            ? "menu block relative transition-colors shadow dark:bg-slate-900 w-full duration-500"
                            : "menu hidden"
                    }
                >
                    {click && (
                        <div className="duration-1000 top-0 mt-auto w-full  bg-white dark:bg-slate-900/75 shadow-xl">
                            <NavLink
                                to={"/"}
                                className="block px-4 py-4 text-base w-full"
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-house mr-3" />
                                Home
                            </NavLink>
                            <NavLink
                                to={"/search"}
                                className="block px-4 py-4 text-base w-full"
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-sharp fa-solid fa-magnifying-glass mr-3" />
                                Search
                            </NavLink>
                            <NavLink
                                to={"/film"}
                                className="block px-4 py-4 text-base w-full"
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-video mr-3" />
                                Film
                            </NavLink>
                            <NavLink
                                to={"/about"}
                                className="block px-4 py-4 text-base w-full"
                                onClick={closeMobileMenu}
                            >
                                <i className="fa-solid fa-circle-info mr-3" />
                                About
                            </NavLink>
                        </div>
                    )}
                </nav>
            </nav>
        </>
    );
}
