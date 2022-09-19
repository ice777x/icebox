import React from "react";
import axios from "axios";
const LastFilm = () => {
    const [data, setData] = React.useState<any>(null);
    React.useEffect(() => {
        const fetchData = async () => {
            const veri = await axios.get(
                "http://20.14.91.241:5000/api/film/last"
            );
            const v_data = await veri.data;
            if (v_data) {
                setData(v_data.data);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="flex w-full   flex-row justify-between md:container flex-wrap gap-y-10 gap-x-2 mx-auto">
                {data ? (
                    <>
                        <div className="w-full border-b-2 border-slate-500" />
                        {data.map((value: any, i: number) => {
                            return (
                                <>
                                    <div
                                        key={i}
                                        className="mx-auto text-slate-500 hover:text-slate-200 rounded-lg shadow-xl bg-slate-800/15 hover:bg-slate-800/20"
                                    >
                                        <a
                                            href={"/film/" + value.title}
                                            className="flex flex-col w-40"
                                        >
                                            <div className="img  sm:w-full justify-center flex">
                                                <img
                                                    src={value.img}
                                                    alt={value.title}
                                                    loading="lazy"
                                                    className="rounded-t-lg"
                                                />
                                            </div>
                                            <div className="py-1 h-fit  flex-wrap space-y-2 justify-center text-center flex-col text-sm">
                                                <p className="flex-1">
                                                    {value.title}
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
        </>
    );
};

export default LastFilm;
