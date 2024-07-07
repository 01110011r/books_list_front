import { useContext } from 'react'
import { GlobalContext } from '../Contextbox'
import Navbar from '../components/Navbar';

export default function Home() {

  const { usernameVal } = useContext(GlobalContext)
  console.log(usernameVal);

  return (
    <div className=' container'>
      <Navbar />
    </div>
  )
}
