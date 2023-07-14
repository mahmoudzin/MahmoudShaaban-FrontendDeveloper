
import React, {  createContext, ReactNode } from 'react';
import useGetData from '../hooks/useGetData';
import { ContexType, initialContextObject } from '../types';



const AppContext = createContext<ContexType>(initialContextObject);

interface ProviderType {
    children: ReactNode
}

const Provider: React.FC<ProviderType> = ({ children }) => {

  const {
    myState,
    dataActions,
    itemActions,
    paginationActions
  } = useGetData()
  

  const ContextValue:ContexType = {
    myState,
    dataActions,
    itemActions,
    paginationActions
  }

  return (
    <AppContext.Provider value={ContextValue}>
      {children}
    </AppContext.Provider>
  );
};


const useAppContext = () => React.useContext(AppContext)


export { useAppContext, Provider as default };