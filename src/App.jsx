import React, { useState } from "react";
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Main from "./components/home/Main";
import Conocenos from "./components/conocenos/Conocenos";
import Carta from "./components/Carta/Carta";
import Contacto from "./components/Contacto/Contacto";
import Sucursales from "./components/Sucursales/Sucursales";

/* administrador */
import Admin from "./components/Admin/Admin";
import Banners from "./components/Admin/Banners";
import CreacionProductos from "./components/Admin/CreacionProductos";
import Formulario from "./components/Admin/Formulario"
import FormularioEdicion from "./components/Admin/FormularioEdicion"

import './styles/estilos.css'

function App() {

  const handleClick = () => document.documentElement.scrollTop = 0

  const [ main, setMain ] = useState(false)
  const [ conocenos, setConocenos ] = useState(false)

  return (
    <div className="home">
      <BrowserRouter>
          <Header />
            <Routes>
                {/* Home */}
                <Route path='/' element={<Main />}/>
                {/* Conocenos */}
                <Route path='/about' element={<Conocenos />}/>
                {/* Contacto */}
                <Route path='/contacto' element={<Contacto />}/>
                {/* Carta */}
                <Route path='/carta' element={<Carta />}/>
                {/* Admin */}
                <Route path='/admin' element={<Admin />}/>
                <Route path='/admin/banners' element={<Banners />}/>
                <Route path='/admin/productos' element={<CreacionProductos />}/>
                <Route path='/admin/crear/:categoria' element={<Formulario />}/>
                <Route path='/admin/editar/:categoria/:id' element={<FormularioEdicion />}/>
                {/* Sucursales */}
                <Route path='/sucursales' element={<Sucursales />}/>

            </Routes>
          <Footer>
            <div className="goTop" id="goTop" onClick={handleClick}>
              <i className="fas fa-arrow-circle-up"></i>
            </div>
          </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
