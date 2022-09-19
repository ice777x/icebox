import React from "react";
import axios from "axios";
import LastFilm from "./LastFilm";

const Search = () => {
    const [data, setData] = React.useState<any>(null);
    const [filtered, setFiltered] = React.useState<any>(null);
    const [search, setSearch] = React.useState<string>("");
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "http://20.14.91.241:5000/api/film"
            );
            const f_data = await response.data;
            setData(f_data);
        };
        fetchData();
        console.log("1");
        return () => {
            console.log("unmounting...");
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value === "") {
            return setFiltered(null);
        } else {
            if (data) {
                const fl = {};
                const filtered = Object.entries(data.data).filter(
                    ([k, item]: any) =>
                        item.title.toLowerCase().includes(value.toLowerCase())
                );
                if (filtered) {
                    filtered.map(([k, item]: any) => {
                        Object.assign(fl, { [k]: item });
                    });
                    setFiltered(fl);
                } else {
                }
            }
        }
    };

    return (
        <div className="w-[calc(80%)] mx-auto">
            <div className="flex flex-col items-center ">
                <div className="text-xl mb-5 my-5 text-slate-200">
                    <h1>Search</h1>
                </div>
                <div className="flex flex-wrap w-5/6">
                    <input
                        type={"search"}
                        className="w-full rounded-lg  outline-sky-800 focus:outline-5 indent-1 border-sky-700 px-1 py-2 text-slate-900"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full mx-auto flex-row flex-wrap gap-y-10 gap-x-2 my-5 ">
                    {filtered ? (
                        <>
                            <div
                                key={"hr"}
                                className="w-full border-b-2 border-slate-500"
                            />
                            {Object.entries(filtered).map(
                                ([k, value]: any, i: number) => {
                                    return (
                                        <React.Fragment key={i}>
                                            <div
                                                key={i}
                                                className=" text-slate-400  justify-between mx-auto hover:text-slate-200 rounded-lg shadow-xl bg-slate-800/15 hover:bg-slate-800/20"
                                            >
                                                <a
                                                    href={
                                                        "/film/" + value.title
                                                    }
                                                    className="flex flex-col w-40"
                                                >
                                                    <div className="img justify-center flex">
                                                        <img
                                                            src={value.img}
                                                            alt={value.title}
                                                            loading="lazy"
                                                            className="rounded-t-lg"
                                                        />
                                                    </div>
                                                    <div className="py-1 h-fit overflow-auto text-clip flex-wrap space-y-2 justify-center text-center flex-col text-sm">
                                                        <p className="flex-1">
                                                            {value.title}
                                                        </p>
                                                    </div>
                                                </a>
                                            </div>
                                        </React.Fragment>
                                    );
                                }
                            )}
                        </>
                    ) : (
                        <LastFilm />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
