import {FcGoogle} from "react-icons/fc";
import {BsFacebook} from "react-icons/bs";


export default function Signup() {
  return (
    <div className=' container flex items-center justify-center h-full'>
      <div className=' min-w-[430px] pt-9 pb-7 px-4 bg-white rounded-md'>
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
      </div>
    </div>
  )
}
