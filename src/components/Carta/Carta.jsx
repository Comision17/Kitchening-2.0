import React, { useState, useEffect } from 'react'
import Botonera from './Botonera'
import Entradas from './Entradas'
import './carta.css'
import entrada from '../../assets/restaurantes.jpg'


function Carta() {

  const [carta , setCarta] = useState([])
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:4000/productos")
    .then((response) => response.json())
    .then((valores) => {
      setCarta(valores.data);
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [loading])
  
  console.log(carta)

  let botones = [
    {
      menu : "Entradas",
      imagen : "entrada.svg",
      alt : "boton para visualizar las distintas entradas"
    },
    {
      menu : "Guarniciones",
      imagen : "guarnicion.png",
      alt : "boton para visualizar las distintas guarniciones"
    },
    {
      menu : "Platos",
      imagen : "platos.svg",
      alt : "boton para visualizar los platos"
    },
    {
      menu : "Bebidas",
      imagen : "bebidas.svg",
      alt : "boton para visualizar las bebidas"
    },
    {
      menu : "Postres",
      imagen : "postre.png",
      alt : "boton para visualizar los postres"
    },
  ]
  if (loading) {
    return (
      <div>
        ...Cargando
      </div>
    )
  }
  return (
    <main className='carta'>
      <h1>Carta</h1>
      <section className='contenedor-botones'>
        {
          botones.map(boton => 
            <Botonera 
              menu = {boton.menu}
              imagen = {boton.imagen}
              alt = {boton.alt}
            />
          )
        }
      </section>
      <section className='productos'>
        <div className='entradas'>
          <h2>Entradas</h2>
          <img src={entrada} alt="" />
          <div className='productos-container'>
            {
              carta[0].entradas.map(entrada => 
                <Entradas
                  nombre = {entrada.nombre}
                  celiaco = {entrada.celiaco}
                  veg = {entrada.veg}
                  descripcion = {entrada.descripcion}
                  precio = {entrada.precio}
                />
              )
            }
          </div>
        </div>
      </section>
    </main>
  )
}

export default Carta