import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TopNav from './component/TopNav'
import LandingPageView from './component/LandingPageView'

function App() {
 

  return (
    <>
    <header>
      <div style = {{minHeight:'10vh', width:'100%', backgroundColor:'rgba(25, 118, 210, 0.61)'}}></div>
      <TopNav />
    </header>

    <div className='main-body'>
      <h1>Welcome to sky voyager!!</h1>

      <LandingPageView />


    </div>

    <footer>
      <div style = {{minHeight:'10vh', width:'100%', backgroundColor:'rgba(25, 118, 210, 0.61)'}}></div>
    </footer>



    </>
  )
}

export default App
