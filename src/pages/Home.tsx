import { useContext } from 'react'
import { GlobalContext } from '../utils/Contextbox'
import Navbar from '../components/Navbar';
import Card from '../components/Card';

export default function Home() {

  const { usernameVal, data } = useContext(GlobalContext)
  console.log(usernameVal);
  console.log(import.meta.env.VITE_LOCAL_API)

  return (
    <div className='container'>
      {/* <Navbar /> */}
      <div className='mb-8'>
       <div className='flex items-center justify-between text-white pt-4 mb-2'>
       <h1 className='font-semibold text-3xl'>
          You've got <span className='text-[#6200EE]'>{data.length} books</span>
        </h1>
        <button className='bg-[#6200EE] py-2 px-6 rounded'> <span className='text-xl'>+  </span> <span className='sm:inline-block hidden'> Create a book</span></button>
       </div>
       <span className='text-white'>Your books today</span>
      </div>

    <div className='flex items-center md:justify-between justify-center flex-wrap gap-8'>

      {data.map((book, index) => <Card key={index} props={book} />)}
    </div>

    </div>
  )
}
