import React from 'react'

function BannerMount(props) {
  return (
    <article className='elemento'>
        <div className='container'>
            <img src={`/images/banners/${props.imagen}`} alt={props.alt} />
            <h4>{props.nombre}</h4>
        </div>
        <button>{props.estado} Banner</button>
    </article>
  )
}

export default BannerMount