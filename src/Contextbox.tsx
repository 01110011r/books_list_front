import { createContext, useRef, useState } from "react"



type StateContextType = {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
    HandleClearClick:(RefHook:React.RefObject<HTMLInputElement>)=>void;
    usernameVal:React.RefObject<HTMLInputElement>;
    emailVal:React.RefObject<HTMLInputElement>;
    passwordVal:React.RefObject<HTMLInputElement>;
  };

export const GlobalContext = createContext<StateContextType>(null as unknown as StateContextType,);

type ContextProviderProps = {
    children: React.ReactNode;
};


export default function Contextbox({ children }: ContextProviderProps) {
  
    const [dark, setDark]=useState(false);

// AUTH ==>

// refs
const usernameVal = useRef<HTMLInputElement>(null);
const emailVal = useRef<HTMLInputElement>(null);
const passwordVal = useRef<HTMLInputElement>(null);

// input clear hande function:
function HandleClearClick(RefHook:React.RefObject<HTMLInputElement>){
    if (RefHook.current) {        
      RefHook.current.focus();
      RefHook.current.value = "";
    }
  }

// <==AUTH;


    return (
        <GlobalContext.Provider value={{dark, setDark, HandleClearClick, usernameVal, emailVal, passwordVal}}>
            {children}
        </GlobalContext.Provider>
    )
}
