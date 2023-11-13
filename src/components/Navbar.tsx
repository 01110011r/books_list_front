import { Link } from "react-router-dom";
import mainlogo from "../../public/mainlogo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { RiNotification3Line } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";


export default function Navbar() {



    return (
        <nav className=" container">

            <div className=" flex items-center justify-between py-4">
                <div className=" flex items-center sm:gap-x-9 gap-x-5">
                    <Link to={'/'}>
                        <img src={mainlogo} alt="main logo" />
                    </Link>
                    <button className="flex items-center gap-2">
                        <BiSearchAlt className=" sm:w-7 sm:h-7 w-5 h-5 text-white" /> <span className=" text-white opacity-70 md:inline-block hidden">Search for only training you want</span>
                    </button>
                </div>
                <div className=" flex items-center gap-x-4 relative">
                    <Link to={'#'}>
                        <RiNotification3Line className=" w-5 h-5" />
                    </Link>
                    <Link to={'#'}>
                        <VscAccount className=" w-5 h-5" />
                    </Link>

                </div>
            </div>
        </nav>
    )
}
