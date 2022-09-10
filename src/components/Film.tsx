import axios from "axios";
import React from "react";

interface Data {
    imdb: string;
    title: string;
    url: string;
    vid?: string;
    img: string;
    year: string;
}
const Film: React.FC = () => {
    const [data, setData] = React.useState<[Data] | null>(null);
    const effectRen = React.useRef(false);

    React.useEffect(() => {
        if (effectRen.current === false) {
            const fetchData = async () => {
                const veri = await axios.get(
                    "http://20.14.91.241:5000/api/film"
                );
                const f_data = await veri.data;
                setData(f_data.data);
            };
            fetchData();
            return () => {
                effectRen.current = true;
            };
        }
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value === "") {
        }
        const get_search_films = async (search: string) => {
            const response = await axios.get("/api/suggestion?query=" + search);
            const d_data = await response;
            console.log(d_data);
        };
        get_search_films(value);
    };

    return (
        <div className="flex-1 max-w-8xl p-10">
            <div className="wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row  gap-8">
                {data
                    ? data?.map((value, i) => {
                          return (
                              <div
                                  key={i}
                                  className=" text-slate-500 hover:text-slate-200 shadow-xl bg-slate-800/15 hover:bg-slate-800/20"
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
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default Film;
