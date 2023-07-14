type State = {
    data: any[];
    item: any;
    filter: string;
    query: string;
    pageNumber: number;
    total: number;
    startPoint:number,
    endPoint: number,
    isLoading:boolean;
    numberOfPages: number[],
    shouldShow:boolean;
  };
  
  type DataActions = {
    changeFilter: (value:string) => void
    changeQuery:(query:string)=> void
    handleSubmitted: (e:React.FormEvent<HTMLFormElement>)=> void
    fetchData: () => void
  }
  
  type ItemActions = {
    getItem: (value:string) => void,
    closeModel: () => void
  }
  type PaginationActions = {
    changePageNumber: (pageNumber: number) => void;
    nextPage: () => void;
    prevPage: () => void;
  }
  export interface ContexType  {
     myState: State,
     dataActions: DataActions,
     itemActions:ItemActions
     paginationActions: PaginationActions,
     
  }

  export const initialContextObject = {
    myState: {
        data: [],
        item: null,
        filter: "",
        query: "",
        pageNumber: 1,
        total: 0,
        startPoint:0,
        endPoint: 10,
        isLoading:false, 
        numberOfPages:[],
        shouldShow:false
      },
    dataActions:{
        fetchData:()=> {}, 
        changeFilter:()=> {}, 
        changeQuery:()=> {}, 
        handleSubmitted:()=> {}
      },
      itemActions:{
        getItem: ()=> {},
        closeModel: ()=> {}
      },
     paginationActions:{
        changePageNumber:()=> {}, 
        nextPage:()=> {}, 
        prevPage:()=> {}
      }
  }