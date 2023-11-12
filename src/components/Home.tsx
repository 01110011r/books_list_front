import { useContext } from 'react'
import { GlobalContext } from '../Contextbox'

export default function Home() {

const {dark, usernameVal}=useContext(GlobalContext)
console.log(usernameVal);

  return (
    <div onClick={()=>console.log(usernameVal)
    }>Home</div>
  )
}
