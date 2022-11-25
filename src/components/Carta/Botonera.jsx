import React from 'react'
import PropTypes from 'prop-types'

function Botonera({menu,imagen,alt}) {
  return (
    <div className='botonera'>
          <label htmlFor={menu}>
            <img src={`/images/icons filter/${imagen}`} alt={alt} />
          </label>
          <p>{menu}</p>
          <input type="checkbox" name={menu} id={menu} />
    </div>
  )
}

Botonera.propTypes = {
    menu : PropTypes.string,
    imagen : PropTypes.string,
    alt : PropTypes.string
}

Botonera.defaultProps = {
    menu : "Elemento",
    imagen : 'entrada.svg',
    alt : 'boton menu'
}

export default Botonera
