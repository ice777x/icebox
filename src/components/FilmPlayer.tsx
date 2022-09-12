import axios from "axios";
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
    const { url } = useParams<string>();
    const [data, setData]: any = React.useState<
        [key: string, value: string] | null
    >(null);
    React.useEffect(() => {
        async function fetchData() {
            const veri = await axios.get("http://20.14.91.241:5000/api/film/");
            const f_data = await veri.data;
            if (url) {
                const q = f_data.data[url];
                const response = await axios.get(
                    "http://20.14.91.241:5000/api/film/video.get?url=" + q.url
                );
                const data = await response.data;
                setData(data);
            }
        }
        fetchData();
    }, [url]);
    if (data && url) {
        const vid_data = data.data;
        return (
            <div className="justify-center flex mx-auto  sm:w-[calc(90%)] ">
                <div className="flex justify-center mx-auto w-full  shadow-slate-200 flex-wrap  h-full">
                    <div className="justify-center p-2  w-full  flex mx-auto ">
                        <div className="player mx-auto justify-center flex w-full ">
                            <iframe
                                className="w-[calc(90%)] aspect-video"
                                src={vid_data.vid}
                                loading="lazy"
                                scrolling="no"
                                allowFullScreen={true}
                            />
                        </div>
                    </div>
                    <div className="details mt-auto sm:mt-auto flex-wrap flex flex-row  w-full text-sm   sm:text-base justfiy-center ">
                        <div className="header text-xl flex border-b-2 border-slate-400 w-full p-2">
                            Film Bilgileri
                        </div>
                        <div className="film-image object-cover sm:basis-3/7 flex my-3 w-full sm:w-max mr-3  justify-center items-start flex-shrink">
                            <img
                                src={vid_data.img}
                                alt={vid_data.titles[0]}
                                loading="lazy"
                                className="w-max"
                            />
                        </div>
                        <div className="w-full sm:basis-3/5 mt-4 p-2 sm:p-0">
                            <div className="film-isim">
                                <span className="text-sky-600">Film Adı</span>
                                {": " +
                                    vid_data.titles[0] +
                                    " - " +
                                    vid_data.titles[1]}
                            </div>
                            <div className="description ">
                                <span className="text-sky-600">Film Özeti</span>
                                : {vid_data.description}
                            </div>
                            {Object.entries(vid_data.details).map(
                                ([k, v]: any, i: number) => {
                                    return (
                                        <div key={i}>
                                            <span className="text-sky-600">
                                                {k}
                                            </span>
                                            : {v}
                                        </div>
                                    );
                                }
                            )}
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
