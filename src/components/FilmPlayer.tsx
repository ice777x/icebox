import React from "react";
import { useParams } from "react-router-dom";

interface Data {
    imdb: string;
    title: string;
    url: string;
    vid?: string;
    img: string;
    year: string;
}
const FilmPlayer = () => {
    const { url } = useParams<any>();
    const [data, setData]: any = React.useState<
        [key: string, value: string] | null
    >(null);
    React.useEffect(() => {
        async function fetchData() {
            const veri = await fetch(
                "http://20.14.91.241:5000/film/search?q=" + url
            );
            const f_data = await veri.json();
            setData(f_data);
        }
        fetchData();
    }, []);
    if (data && url) {
        const vid_data = data[0];
        return (
            <div>
                <div className="flex shadow-lg flex-wrap h-[calc(100vh_-_68px)] sm:h-full max-w-8xl">
                    <div className="justify-center  w-full ">
                        <div className="player justify-center flex w-full aspect-auto ">
                            <iframe
                                className="w-[65rem]  aspect-video "
                                src={vid_data.vid}
                                loading="lazy"
                                scrolling="no"
                                allowFullScreen={true}
                            />
                        </div>
                    </div>
                    <div className="details mt-auto sm:mt-auto flex flex-row sm:w-[calc(90%)] w-full text-sm sm:textbase justfiy-center sm:ml-14 sm:p-10 shadow-2xl ">
                        <div className="film-image basis-2/5 w-40 mr-6 sm:w-72 aspect-square">
                            <img src={vid_data.img} alt={vid_data.title} />
                        </div>
                        <div className="w-full basis-4/5 ">
                            <div className="header  sm:px-20 mr-5 sm:mr-0 mb-5 sm:mb-10 border-b border-slate-400">
                                {vid_data.title[0]}
                            </div>
                            <div className="year">Year: {vid_data.year}</div>
                            <div className="imdb">IMDB: {vid_data.imdb}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default FilmPlayer;
