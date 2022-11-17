import React from 'react'
import logo from '../assets/logo.jpg'

function Header() {

  const burgerMenu = () => {
    document.querySelector('#menu').classList.toggle('desaparecer')
  }

  return (
    <header>
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <button id="hamburguesita" onClick={burgerMenu}>
          <i className="fas fa-hamburger"></i>
        </button>
        
        <ul id="menu">
            <li id="container" className="kitchening"><a href="/home" id="home">Home</a></li>
            <li><a href="#">Quienes</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Porfolio</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </header>
  )
}

export default Header

