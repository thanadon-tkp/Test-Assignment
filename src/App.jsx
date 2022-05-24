import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Place from './pages/Place'

//css
import './styles/App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Place/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App