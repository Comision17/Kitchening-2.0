import React from 'react'

function Footer(props) {
  return (
    <footer>
        {props.children}
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Quienes</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Porfolio</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </footer>
  )
}

export default Footer