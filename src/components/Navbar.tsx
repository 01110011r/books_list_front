import { Link } from "react-router-dom";
import mainlogo from "../../public/mainlogo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { RiNotification3Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import Search from "./Search";
import { useContext } from "react";
import { GlobalContext } from "../Contextbox";


export default function Navbar() {

    const { setSearchModal } = useContext(GlobalContext);


    return (
        <nav className=" container">

            <div className=" flex items-center justify-between gap-x-4 py-4 relative">
                <div className=" flex items-center sm:gap-x-9 gap-x-5">
                    <Link to={'/'}>
                        <img src={mainlogo} alt="main logo" />
                    </Link>
                    <button className="flex items-center gap-2" onClick={()=>setSearchModal(true)}>
                        <BiSearchAlt className=" sm:w-7 sm:h-7 w-5 h-5 text-white" /><span className=" text-white opacity-70 md:inline-block hidden">Search for only training you want</span>
                    </button>
                </div>
                <div className=" flex items-center gap-x-4 relative">
                    <button>
                        <RiNotification3Line className=" w-5 h-5" />
                    </button>
                    <button>
                        <VscAccount className=" w-5 h-5" />
                    </button>

                </div>
                <Search />
            </div>
        </nav>
    )
}
