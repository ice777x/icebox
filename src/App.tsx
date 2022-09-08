import React from "react";
import axios from "axios";

function App() {
    const [data, setData] = React.useState<any>(null);
    React.useEffect(() => {
        const fetchData = async () => {
            const veri = await axios.get("http://20.14.91.241:5000/film/last");
            const v_data = await veri.data;
            if (v_data) {
                setData(v_data);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            <div className="flex-1 mx-auto p-10 max-w-7xl">
                <div className="md:container flex flex-wrap flex-col gap-8 text-white ">
                    <h1 className="text-xl">Son Eklenenler</h1>
                    <hr />
                    <div className="wrapper grid grid-cols-2 sm:grid-cols-4 w-full gap-y-10 sm:gap-x-2 mx-auto">
                        {data
                            ? data.map((value: any, i: number) => {
                                  return (
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
                                  );
                              })
                            : null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
