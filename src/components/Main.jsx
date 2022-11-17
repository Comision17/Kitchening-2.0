import React from 'react'
import Article from './Article'
import Article2 from './Article2'

function Main() {

  let productos = [
    {
      id: 1,
      imgPrincipal : "img-pdto-1.jpg",
      etiqueta:'img-nuevo.png',
      titulo:'Lorem ipsum amet',
      descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum eveniet eius atque, nam exercitationem cum modi facere quae nesciunt nobis, velit ex.',
    },
    {
      id: 2,
      imgPrincipal : "img-pdto-2.jpg",
      etiqueta:'img-gratis.png',
      titulo:'Lorem ipsum amet',
      descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum eveniet eius atque, nam exercitationem cum modi facere quae nesciunt nobis, velit ex.',
    },
    {
      id: 3,
      imgPrincipal : "img-pdto-3.jpg",
      etiqueta:'img-descuento.png',
      titulo:'Lorem ipsum amet',
      descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum eveniet eius atque, nam exercitationem cum modi facere quae nesciunt nobis, velit ex.',
    },
  ]
  let productos2 = [
    {
      id: 1,
      etiqueta:'img-nuevo.png',
      titulo:'Lorem ipsum amet',
      descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum eveniet eius atque, nam exercitationem cum modi facere quae nesciunt nobis, velit ex.',
    },
    {
      id: 2,
      imgPrincipal : "img-pdto-2.jpg",
      etiqueta:'img-gratis.png',
      titulo:'Lorem ipsum amet',
    },
    {
      id: 3,
      imgPrincipal : "img-pdto-3.jpg",
      titulo:'Lorem ipsum amet',
      descripcion:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum eveniet eius atque, nam exercitationem cum modi facere quae nesciunt nobis, velit ex.',
    },
  ]

  return (
    <main>
        <div className="banner">
            <img src="/images/img-banner.jpg" alt="" />
        </div>
        <section>

          {productos.map((producto,index) => 
          
              <Article 
                key={index}
                id={producto.id}
                imgPrincipal={producto.imgPrincipal}
                etiqueta={producto.etiqueta}
                titulo={producto.titulo}
                descripcion={producto.descripcion}
              />
              
          )}
          {productos2.map((producto,index) => 
          
              <Article2 
                key={index}
                id={producto.id}
                imgPrincipal={producto.imgPrincipal}
                etiqueta={producto.etiqueta}
                titulo={producto.titulo}
                descripcion={producto.descripcion}
              />
          )}
        </section>

    </main>
  )
}

export default Main