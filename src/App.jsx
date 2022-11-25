import React, { useState } from "react";
import { Route, BrowserRouter, Routes} from 'react-router-dom'

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Main from "./components/home/Main";
import Conocenos from "./components/conocenos/Conocenos";
import Carta from "./components/Carta/Carta";
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
                {/* Conocenos */}
                <Route path='/carta' element={<Carta />}/>


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
