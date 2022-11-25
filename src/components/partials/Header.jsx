import React from 'react'
import logo from '../../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

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
            <li id="container" className="kitchening">
              <NavLink to="/">
                  Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/carta">Carta</NavLink>
            </li>
            <li>
              <NavLink to="/about">Conocenos</NavLink>
            </li>
            <li>
              <NavLink to="/sucursales">Sucursales</NavLink>
              </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
        </ul>
    </header>
  )
}

export default Header

