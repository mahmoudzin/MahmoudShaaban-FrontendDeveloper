type InitialState = {
    data: any[];
    item:any;
    filter: string;
    query: string;
    pageNumber: number;
    total: number;
    startPoint:number,
    endPoint: number,
  };
  
  export const initialState: InitialState = {
    data: [],
    item: null,
    filter: "",
    query: "",
    pageNumber: 1,
    total: 0,
    startPoint:0,
    endPoint: 10,
  };
  type Action =
    | { type: "setData"; payload: any[] }
    | { type: "setItem"; payload: string}
    | { type: "reSetItem";}
    | { type: "setFilter"; payload: string }
    | { type: "setQuery"; payload: string }
    | { type: "setPageNumber"; payload: number }
    | { type: "nextPage";  }
    | { type: "prevPage"; }
  
  
export  const reducer = (state: InitialState, action: Action): InitialState => {
    switch (action.type) {
      case "setData":
        return { ...state, data: action.payload,  total:action.payload.length };
      case "setItem":
        return { ...state, item: state.data.find(item => item.capsule_serial === action.payload)};
      case "reSetItem":
        return { ...state, item: null};
      case "setFilter":
        return { ...state, filter: action.payload };
      case "setQuery":
        return { ...state, query: action.payload };
      case "setPageNumber":
        return { ...state, pageNumber: action.payload, endPoint: action.payload*10, startPoint: (action.payload * 10) - 10  };
      case "nextPage":
        return { ...state, pageNumber:state.pageNumber + 1, endPoint: (state.pageNumber + 1) * 10, startPoint: ((state.pageNumber + 1) * 10) - 10};
      case "prevPage":
        return { ...state, pageNumber:state.pageNumber - 1, endPoint: (state.pageNumber - 1) * 10, startPoint: ((state.pageNumber - 1) * 10) - 10};
      default:
        return state;
    }
  };