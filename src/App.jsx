import './App.css'
import Encabezado from './Componentes/Encabezado'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Uploader from './Paginas/Uploader'
import Contacto from './Paginas/Contacto'
import Servicios from './Paginas/Servicios'

function Home() { return null; }

function App() {

  return (
    <>
      <BrowserRouter basename='/tp4-leng4-TomasMollinedo'>
        <Encabezado/>
      <Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/Uploader" element={<Uploader/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
			</Routes>
      </BrowserRouter>
		</>
  )
}

export default App;
