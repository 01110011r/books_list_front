import { createContext, useState } from "react"



type StateContextType = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
  };

export const GlobalContext = createContext<StateContextType>(null as unknown as StateContextType,);

type ContextProviderProps = {
    children: React.ReactNode;
};


export default function Contextbox({ children }: ContextProviderProps) {
  
    const [dark, setDark]=useState(false);




    return (
        <GlobalContext.Provider value={{dark, setDark}}>
            {children}
        </GlobalContext.Provider>
    )
}
