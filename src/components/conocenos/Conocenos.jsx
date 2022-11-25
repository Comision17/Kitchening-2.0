import React,{useState} from 'react'
import Persona from './Persona'
import profesores from './Profes.json'
import alumnos from './Alumnos.json'

function Conocenos() {

    const [personas,setPersonas] = useState([])
    const [mostrar,setMostrar] = useState('Mostrar Personas')

    const handleClick = (e) => {
        
        e.preventDefault()
        if (e.target.classList.value === 'Ver-Alumnos') {
            console.log('hiciste Click');
            e.target.classList.value = 'Ver-Profes'
            setPersonas(alumnos)
            setMostrar('Ver Profes')
        }else{
            console.log('hiciste Click');
            setPersonas(profesores)
            e.target.classList.value = 'Ver-Alumnos'
            setMostrar('Ver Alumnos')
        }
        
    }

  return (
    <main className='conocenos'>
        <h2>Conocenos</h2>
        <section className='titular'>
            <h3>Somos de el barrio de las compuertas</h3>
            <p>Saliendo del rio del parana, hasta llegar a tu paladar, tenemos los mejores platos de argentina, con toda la fuerza cuyana, te traemos la mejor seleccion de comidas hasta tu mesa, estes donde estes</p>
        </section>
        <section className='titular'>
            <h3>Juntos con Formar, nosotros hacemos posible que el conocimiento llegue hasta la puerta de tu hogar</h3>
            <p>Como la comision 17 nosotros trabajamos todos los dias, mejorando nuestros proyectos</p>
        </section>
        <section className='boton'>
            <button className='Ver-Alumnos' onClick={handleClick}>{mostrar}</button>
        </section>
        <section className='personas'>
            {personas.map(persona => 
                <Persona 
                    nombre = {persona.nombre}
                    imagen = {persona.imagen}
                    alt = {persona.alt}
                />
            )}
        </section>
    </main>
  )
}

export default Conocenos