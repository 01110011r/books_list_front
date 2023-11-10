import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";
import {CiCircleRemove} from "react-icons/ci"
import { Link } from "react-router-dom";


export default function Signup() {
  return (
    <div className=' container flex items-center justify-center h-full'>
      <div className=' min-w-[430px] py-12 px-4 bg-white rounded-xl'>
<h2 className=" text-center mb-7 text-base">Sign up</h2>
<div className="flex flex-col gap-y-2">
<button className="flex items-center justify-center py-2 gap-x-2 border-2 rounded-sm border-zinc-500">
<FcGoogle className="w-6 h-6"/> <p>Continue with Google</p>
  </button>
   <button className="flex items-center justify-center py-2 gap-x-2 border-2 rounded-sm border-zinc-500">
<BsFacebook className="w-6 h-6 text-blue-500"/> <p>Continue with Facebook</p>
  </button>
<div className=" flex items-center gap-x-2 mt-3">
<hr className=" w-full h-[2px] bg-black"/><span>OR</span><hr className=" w-full h-[2px] bg-black"/>
</div>

</div>
<form className="flex flex-col gap-y-2 mt-7">
  <label htmlFor="" className="flex flex-col ">
    <span>Your name</span>
    <div className=" flex gap-x-2 border-[1px] rounded-md p-2 items-center">
    <input className=" outline-none w-full" type="text" placeholder="Enter your name" />
    <CiCircleRemove className=" cursor-pointer"/>
    </div>
  </label>
  <label htmlFor="" className="flex flex-col">
    <span>Your email</span>
    <div className=" flex gap-x-2 border-[1px] rounded-md p-2 items-center">
    <input className=" outline-none w-full" type="text" placeholder="Enter your email" />
    <CiCircleRemove className=" cursor-pointer"/>
    </div>
  </label>
  <label htmlFor="" className="flex flex-col">
    <span>Your username</span>
    <div className=" flex gap-x-2 border-[1px] rounded-md p-2 items-center">
    <input className=" outline-none w-full" type="text" placeholder="Enter your username" />
    <CiCircleRemove className=" cursor-pointer"/>
    </div>
  </label>

  <button type="button" className=" mt-9 bg-[#6200EE] text-white rounded-md py-2">Submit</button>
</form>
<p className=" text-center mt-2 opacity-60">Already signed up? <Link className="text-[#6200EE]" to={'/signin'}>Go to  sign in.</Link></p>
      </div>
    </div>
  )
}
