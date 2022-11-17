import React from 'react'

function Article({id,imgPrincipal,etiqueta,titulo,descripcion}) {

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

export default Article