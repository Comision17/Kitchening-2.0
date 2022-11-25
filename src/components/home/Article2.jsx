import React from 'react'
import PropTypes from 'prop-types'

function Article2({id,imgPrincipal,etiqueta,titulo,descripcion}) {

    return (
      <article>
          <div className="image">
              <img className="producto" src={`/images/${imgPrincipal}`} alt="" />
              <img className="etiqueta" src={`/images/${etiqueta}`} alt="" />
              <a href={`/detalle/${id}`} className="ampliar">ampliar foto</a>
          </div>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <a href={`/detalle/${id}`} className="link">ver más</a>
      </article>
    )
  }

Article2.propTypes = {
    id : PropTypes.number,
    imgPrincipal: PropTypes.string,
    etiqueta : PropTypes.string,
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
}
Article2.defaultProps = {
    id : 0,
    imgPrincipal: "img-pdto-1.jpg",
    etiqueta : 'img-descuento.png',
    titulo: 'Lorem ipsum amet',
    descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum eveniet eius atque, nam exercitationem cum modi facere quae nesciunt nobis, velit ex.',
}

export default Article2
