import React,{useEffect,useState} from 'react'
import axios from 'axios'
import BannerMount from './BannerMount'

function Banners() {

    const [isLoading, setIsLoading] = useState(true)
    const [banners, setBanners] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/banners")
        .then((response) => response.json())
        .then((valores) => {
            setBanners(valores.data);
            setIsLoading(false)
        })
        .catch(error => console.log(error))
      },[isLoading])

      console.log(banners);


 if (isLoading) {
    return(
        <div>
            ...Cargando
        </div>
    )
 }
  return (
    <main className='banners'>
        <h1>Banners</h1>
        <button>Crear Banner</button>
        <section className='activos'>
            <h2>activos</h2>
            { banners.map((banner,index) => 

                banner.activo ==="si" ? 

                <BannerMount
                    key = {index}
                    imagen = {banner.imagen}    
                    alt = {banner.nombre}
                    nombre = {banner.nombre}
                    estado = "Desactivar"
                />

                :

                null
            )}

        </section>
        <section className='desactivados'>
            <h2>desactivados</h2>
            { banners.map((banner,index) => 

                banner.activo ==="no" ? 

                <BannerMount
                    key = {index}
                    imagen = {banner.imagen}    
                    alt = {banner.nombre}
                    nombre = {banner.nombre}
                    estado = "Activar"
                />

                :

                null
                )}
        </section>
    </main>
  )
}

export default Banners