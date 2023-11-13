import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'

export default function App() {
  return (
    <div className='bg-box bg-main-bg bg-no-repeat h-screen bg-cover md:bg-[length:80%]'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
