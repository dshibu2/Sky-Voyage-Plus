import { useState } from 'react'

import './App.css'

import TopNav from './component/TopNav'
import AppRoutes from './AppRoutes'

function App() {
 

  return (
    <>
    <header>
      <div style = {{minHeight:'10vh', width:'100%', backgroundColor:'rgba(25, 118, 210, 0.61)'}}></div>
      <TopNav />
    </header>

    <main>
      <div className='main-body'>
        <h1>Welcome to sky voyager!!</h1>
        <AppRoutes />
        
      </div>
    </main>

    <footer>
      <div style = {{minHeight:'10vh', width:'100%', backgroundColor:'rgba(25, 118, 210, 0.61)'}}></div>
    </footer>



    </>
  )
}

export default App
