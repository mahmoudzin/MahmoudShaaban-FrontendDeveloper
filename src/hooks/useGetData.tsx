
import { useReducer, useEffect, useCallback, useMemo, useState } from "react";
import { initialState, reducer } from "./Reducer";



const useGetData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const [isLoading, setIsLoading] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  const filteredData = useMemo(() => {
    return state.data.slice(state.startPoint, state.endPoint);
  }, [state.data, state.startPoint, state.endPoint]);

  const numberOfPages = useMemo(() => {
      return Array.from({length:(Math.ceil(state.total / 10))}, (value, index) => index +1)
  }, [state.total]);

  const getItem = useCallback((capsule_serial: string) => {
    setShouldShow(true);
    dispatch({ type: "setItem", payload: capsule_serial });
  }, [])

  const closeModel = useCallback(()=> {
    setShouldShow(false)
    dispatch({type:"reSetItem"})
  }, [])

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`https://api.spacexdata.com/v3/capsules`);
      const data = await res.json();
      dispatch({ type: "setData", payload: data });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false)
  }, []);
;

  const handleSubmitted = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.spacexdata.com/v3/capsules?${state.filter}=${state.query}`
        );
        const data = await res.json();
        dispatch({ type: "setData", payload: data });
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    },
    [state.filter, state.query]
  );
    const changePageNumber = useCallback((pageNumber: number) => {
    dispatch({ type: "setPageNumber", payload: pageNumber });
  }, []);

  const changeFilter = useCallback((filter: string) => {
    dispatch({ type: "setFilter", payload: filter });
  }, []);

  const changeQuery = useCallback((query: string) => {
    dispatch({ type: "setQuery", payload: query });
  }, []);


  const nextPage = useCallback(() => {
    dispatch({ type: "nextPage"});
  }, []);

  const prevPage = useCallback(() => {
    dispatch({ type: "prevPage"});
  }, []);


  useEffect(() => {
    fetchData();
  }, []);

  const myState = {
    ...state,
    data: filteredData, 
    isLoading, 
    numberOfPages,
    shouldShow
  }
  const dataActions = {
    fetchData, 
    changeFilter, 
    changeQuery, 
    handleSubmitted, 

  }
  const paginationActions = {
    changePageNumber, 
    nextPage, 
    prevPage
  }
  const itemActions = {
    getItem,
    closeModel
  }
  return { 
    myState,
    dataActions,
    itemActions,
    paginationActions
  };
};

export default useGetData;
