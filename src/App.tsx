import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App() {
  return (
    <div className='bg-box bg-main-bg bg-no-repeat h-screen bg-cover md:bg-[length:80%]'>
      <GoogleOAuthProvider clientId="275113613275-k63ptu2cs93s0oeoteesu15kve2bj5mr.apps.googleusercontent.com">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  )
}
