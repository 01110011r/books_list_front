import { useContext } from "react";
import { MdClear } from "react-icons/md";
import { GlobalContext } from "../utils/Contextbox";



export default function Search() {

    const { searchModal, setSearchModal } = useContext(GlobalContext);
    console.log(searchModal);
    


    return (
        <div className={`top-0 bg-slate-800 opacity-95 fixed w-screen left-0 flex justify-center items-start pt-6 h-screen z-10 delay-150 transition ${!searchModal && "scale-0"}`}>
            <MdClear className={" text-white w-8 h-8 fixed top-3 right-4 cursor-pointer"} onClick={()=>setSearchModal(false)}/>
            <div className='flex items-center mt-7'>
                <input type="search" placeholder='Quick search.' className=" p-[6px] outline-none rounded-tl-md rounded-bl-md" />
                <button className="p-[7px] rounded-tr-md rounded-br-md bg-[#6200EE] text-white">Search</button>
            </div>
        </div>
    )
}
