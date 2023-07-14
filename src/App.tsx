import React, { lazy, Suspense } from "react";
import { useAppContext } from "./context";
import Laoding from "./components/Loading";
import Model from "./components/Model";

const Banner = lazy(() => import("./components/Banner"));
const GridData = lazy(() => import("./components/Grid"));
const SearchForm = lazy(() => import("./components/SearchForm"));

const App = () => {
  const { myState, dataActions } = useAppContext();
  const {data, isLoading} = myState
  const {fetchData} = dataActions

  return (
    
    <>
      <Suspense fallback={<Laoding/>}>
        <Banner />
        <div className="container mx-auto">
          <SearchForm />
          {isLoading ? (
            <Laoding/>
          ) : data.length > 0 ? (
            <GridData
              tableHead={["ID", "Serial", "details", "Original Launch", "status", "type"]}
              tableItems={data.map((obj: any) => ({
                id: <div className="text-gray-800 font-bold">{obj.capsule_id}</div>,
                serial: obj.capsule_serial,
                details: obj.details,
                original_launch: (
                  <div className="text-gray-800 font-bold text-center">
                    {new Date(obj.original_launch).toLocaleDateString()}
                  </div>
                ),
                status: (
                  <div
                    className={`${
                      obj.status === "active"
                        ? "text-green-500"
                        : obj.status === "unknown"
                        ? "text-gray-300"
                        : "text-yellow-500"
                    } text-center`}
                  >
                    {obj.status}
                  </div>
                ),
                type: obj.type,
              }))}
            />
          ) : (
            <div className="w-full bg-gray-100 p-6 text-center mb-10 shadow-md sm:rounded-lg">
              <p className="text-gray-900 font-bold mb-10">No result to your request :)</p>
              <button onClick={()=> fetchData()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back To All Results</button>
            </div>
          )}
        </div>
        <Model/>
      </Suspense>
    </>
  );
};

export default App;
