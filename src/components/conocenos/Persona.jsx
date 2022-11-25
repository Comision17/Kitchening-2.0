import React from 'react'
import PropTypes from 'prop-types'

function Persona(props) {

  const imagenes = `url('/images/conocenos/${props.imagen}')`

  return (
    <article className='persona'>
        <div className='profile-picture' style={{backgroundImage : imagenes}} >
            {/* <img src={`/images/conocenos/${props.imagen}`} alt={props.alt} /> */}
        </div>
        <h2>{props.nombre}</h2>
    </article>
  )
}

Persona.propTypes = {
    nombre : PropTypes.string,
    imagen: PropTypes.string,
    alt: PropTypes.string
}
Persona.defaultProps = {
    nombre : 'Falto en la clase',
    imagen: "avatar-porDefecto.png",
    alt: '404, no se encuentra el alumno'
}

export default Persona
