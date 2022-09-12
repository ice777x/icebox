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
    return (
        <div className="max-w-8xl p-10">
            <div className="wrapper flex flex-row flex-wrap gap-8 w-[calc(80%)] mx-auto">
                {data
                    ? Object.entries(data).map(([k, value], i) => {
                          return (
                              <div
                                  key={i}
                                  className=" text-slate-500 mx-auto hover:text-slate-200 rounded-lg shadow-xl bg-slate-800/15 hover:bg-slate-800/20"
                              >
                                  <a
                                      href={"/film/" + value.title}
                                      className="flex flex-col overflow-auto"
                                  >
                                      <div className="img justify-center flex">
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
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export default Film;
