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
        <div className="w-full my-3">
            <div className="wrapper flex flex-row flex-wrap gap-y-10 w-full sm:w-[calc(80%)] mx-auto">
                {data
                    ? Object.entries(data).map(([k, value], i) => {
                          return (
                              <div
                                  key={i}
                                  className=" text-slate-500 mx-auto flex hover:text-slate-200 rounded-lg shadow-xl bg-slate-800/15 hover:bg-slate-800/20"
                              >
                                  <a
                                      href={"/film/" + value.title}
                                      className="flex flex-col w-48"
                                  >
                                      <div className="img justify-center   flex object-fill">
                                          <img
                                              src={value.img}
                                              alt={value.title}
                                              loading="lazy"
                                              className="rounded-t-lg"
                                          />
                                      </div>
                                      <div className="py-1 h-fit overflow-clip  flex-wrap w-full space-y-2 flex-col justify-center text-center  text-sm">
                                          <p className="text-clip">
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
