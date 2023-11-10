import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Error404 from './components/Error404'

export default function Router() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/*' element={<Error404/>}/>
    </Routes>
    </>
  )
}
