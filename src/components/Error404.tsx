import { Link } from 'react-router-dom';
import img404 from '../../public/undraw_page_not_found_re_e9o6.png';

export default function Error404() {
  return (  
    <div className='flex items-center justify-center h-full'>
      <div>
        <div className='max-w-[720px] max-h-[476px]'>
          <img className=' w-full h-full' src={img404} alt="notfound img: 404" />
        </div>
        <div className=' flex items-center sm:gap-x-9 mt-20 gap-x-3 justify-center'>
          <Link to={'/'}><button className='bg-[#6200EE] text-white py-2 sm:px-9 px-3 rounded-[4px]'>Go Home Page</button></Link>
          <Link to={'#'}><button className=' text-[#6200ee] border-[1px] border-[#6200ee] py-2 sm:px-9 px-3 rounded-[4px]'>Reload Page</button></Link>
        </div>
      </div>
    </div>
  )
}
