import React from "react";
import axios from "axios";

const Search = () => {
    const [data, setData] = React.useState<any>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value === "") {
            const get_last_film = async () => {
                const response = await axios.get(
                    "http://20.14.91.241/api/film/last"
                );
                const data = await response.data;
                setData(data);
            };
            get_last_film();
        } else {
            const get_search_films = async (search: string) => {
                const response = await axios.get(
                    "http://20.14.91.241/api/film/search?q=" + search
                );
                const data = await response.data;
                if (data) {
                    setData(data);
                }
            };
            get_search_films(value);
        }
    };
    return (
        <div className="w-full">
            <div className="flex flex-col  justify-center items-center my-10">
                <div className="text-xl mb-5 text-slate-200">
                    <h1>Search</h1>
                </div>
                <input
                    type={"search"}
                    className="w-[20rem] sm:w-[50rem] rounded-lg  outline-sky-800 focus:outline-5 indent-1 border-sky-700 px-1 py-2 text-slate-900"
                    onChange={handleChange}
                />
                <div className="flex w-full flex-row flex-wrap gap-y-10 my-5 gap-x-2 mx-auto">
                    {data ? (
                        <>
                            <hr className="w-full border-slate-400" />
                            {data.map((value: any, i: number) => {
                                return (
                                    <>
                                        <div
                                            key={i}
                                            className=" text-slate-500 hover:text-slate-200 shadow-xl mx-auto bg-slate-800/15 hover:bg-slate-800/20"
                                        >
                                            <a
                                                href={"/film/" + value.title[0]}
                                                className=""
                                            >
                                                <div className="img  justify-center aspect-square flex">
                                                    <img
                                                        src={value.img}
                                                        alt={value.title}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="flex py-2 h-fit flex-wrap space-y-2 justify-center text-center flex-col text-sm">
                                                    <p className="flex-1">
                                                        {value.title[0]}
                                                    </p>
                                                    <p className="flex-1">
                                                        {value.title[1]}
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </>
                                );
                            })}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Search;
