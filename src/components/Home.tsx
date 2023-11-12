import React, { useContext } from 'react'
import { GlobalContext } from '../Contextbox'

export default function Home() {

const {dark}=useContext(GlobalContext)
console.log(dark);

  return (
    <div>Home</div>
  )
}
