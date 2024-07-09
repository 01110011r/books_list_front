import axios from "axios";
import React, { createContext, useEffect, useRef, useState } from "react"



type ContextType = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  searchModal: boolean;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  HandleClearClick: (RefHook: React.RefObject<HTMLInputElement>) => void;
  usernameVal: React.RefObject<HTMLInputElement>;
  emailVal: React.RefObject<HTMLInputElement>;
  passwordVal: React.RefObject<HTMLInputElement>;
  data: Data[];
};

export type Data = {
  _id: string,
  title: string,
  description: string,
  owner: {_id: string, username: string, email: string},
  pages: number,
  status: string[]
  published: number,
  writer: string
}

export const GlobalContext = createContext<ContextType>(null as unknown as ContextType,);

type ContextProviderProps = {
  children: React.ReactNode;
};


export default function Contextbox({ children }: ContextProviderProps) {

  const [searchModal, setSearchModal] = useState(false);
  const [menu, setMenu] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null | unknown>(null);
  const Url = import.meta.env.VITE_LOCAL_API;

  //data fetching
  const fetchData = async () => {
    try {
      const res = await axios.get<Data[]>(Url+'/books');
      console.log(res.data)
      setData(res.data)
    } catch (error) {
      console.log(error);
      setError(error)
    } finally {
      setLoading(false)
    }
  }


  // AUTH ==>

  // refs
  const usernameVal = useRef<HTMLInputElement>(null);
  const emailVal = useRef<HTMLInputElement>(null);
  const passwordVal = useRef<HTMLInputElement>(null);

  // input clear hande function:
  function HandleClearClick(RefHook: React.RefObject<HTMLInputElement>) {
    if (RefHook.current) {
      RefHook.current.focus();
      RefHook.current.value = "";
    }
  }

  console.log(import.meta.env.VITE_LOCAL_API);

  // <==AUTH;


  useEffect(() => {
    fetchData()
  }, []);
console.log('data ' + data)
  return (
    <GlobalContext.Provider value={{data, menu, setMenu, searchModal, setSearchModal, HandleClearClick, usernameVal, emailVal, passwordVal }}>
      {children}
    </GlobalContext.Provider>
  )
}
