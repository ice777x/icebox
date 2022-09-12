import React from "react";
import axios from "axios";

function App() {
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
            <div className="flex sm:container w-full mx-auto">
                <div className="flex-wrap flex-col gap-8 text-white ">
                    <div className="flex my-auto mb-2 lg:w-[calc(80%)] mx-auto h-10 items-end">
                        <h1 className="text-xl">Son Eklenenler</h1>
                    </div>
                    <div className="border-b-2 lg:w-[calc(80%)] mx-auto border-slate-600" />
                    <div className="wrapper container flex flex-wrap flex-row lg:w-[calc(80%)] w-full my-10 gap-y-10 sm:gap-x-2 mx-auto">
                        {data
                            ? data.map((value: any, i: number) => {
                                  return (
                                      <div
                                          key={i}
                                          className=" text-slate-500 hover:text-slate-200 rounded-lg shadow-xl mx-auto bg-slate-800/15 hover:bg-slate-800/20"
                                      >
                                          <a
                                              href={"/film/" + value.title}
                                              className="flex-flex-col overflow-auto"
                                          >
                                              <div className="img  justify-center  flex">
                                                  <img
                                                      src={value.img}
                                                      alt={value.title}
                                                      loading="lazy"
                                                      className="rounded-t-lg"
                                                  />
                                              </div>
                                              <div className="justify-center text-center my-1 text-sm">
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
            </div>
        </>
    );
}

export default App;
