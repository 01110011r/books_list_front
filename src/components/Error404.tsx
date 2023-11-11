import { Link } from 'react-router-dom';
import img404 from '../../public/undraw_page_not_found_re_e9o6.png';

export default function Error404() {
  return (
    <div className='flex items-center justify-center h-full'>
      <div>
      <div className='max-w-[720px] max-h-[476px]'>
      <img className=' w-full h-full' src={img404} alt="notfound img: 404" />
      </div>
<div>
  <Link to={'/'}><button className='bg-[#6200EE] text-white py-2 px-9'>Go Home Page</button></Link>
  <Link to={'#'}><button className=''>Reload Page</button></Link>
</div>
      </div>
    </div>
  )
}
