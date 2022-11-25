import React from 'react'
import PropTypes from 'prop-types'

function Entradas(props) {
  return (
    <article>
        <div className='imagenes'>
            {
                props.celiaco === 1 ? 
                <img src={`/images/icons filter/celiaco.png`} className='celiaco' alt="producto apto celiacos" />
                :
                null
            }
            {
                props.veg !== 0 ? 
                <img src={`/images/icons filter/vegan.png`} className='veg' alt="producto apto veganos" />
                :
                null
            }
            <img src={`/images/productos/${props.imagen}`} alt={props.imagen} />
        </div>
        <div className='contenido'>
            <h4>{props.nombre}</h4>
            <p>{props.descripcion}</p>
            <span>${props.precio}</span>
            <button>Añadir al Carrito</button>
        </div>
    </article>
  )
}

Entradas.propTypes = {
    nombre: PropTypes.string,
    precio: PropTypes.number,
    descripcion: PropTypes.string,
    celiaco: PropTypes.string,
    veg: PropTypes.number,
    imagen:PropTypes.string,
    categoriaId: PropTypes.number
}

Entradas.defaultProps = {
    nombre: "entrada por defecto",
    precio: 1500,
    descripcion: "producto genial",
    celiaco: "no",
    veg: 0,
    imagen: "entrada por defecto.jpg",
    categoriaId: 1
}

export default Entradas
