import React,{useEffect,useState} from 'react'
import axios from 'axios'

function Formulario() {

  const [variedad, setVariedad] = useState('entrada')

  const [categorias,setCategorias] = useState([])
  const [marcas,setMarcas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [values, setValues] = useState({
    nombre : "",
    precio : "",
    descripcion : "",
    celiaco : "",
    veg : "",
    categoria : "",
    litros : "",
    marea : "",
    gas : "",
    dieta : "",
    marca : "",
  })

  const actualUrl = window.location.href;
  
  useEffect(()=>{
    let barra = actualUrl.lastIndexOf('/') + 1
    let magia = actualUrl.substring(barra,100)
    setVariedad(magia)
  },[actualUrl])


  useEffect(()=>{
    fetch("http://localhost:4000/categorias")
    .then((response) => response.json())
    .then((valores) => {
      setCategorias(valores.data);
      fetch("http://localhost:4000/marcas")
      .then((respuesta) => respuesta.json())
      .then((marcas) => {
        setMarcas(marcas.data);
        setIsLoading(false)
      })
    })
    .catch(error => console.log(error))
  },[isLoading])

  const handleChange = (e) => {
    let {target} = e
    let {name,value} = target

    let newValues = {
      ...values,
      [name] : value
    }

    setValues(newValues)
  };
 const handleSubmit = async (e) => {
    e.preventDefault()

    /* let response = await fetch("http://localhost:4000/categorias",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(values)
    }) */

    let response = await axios.post(`http://localhost:4000/admin/crear/${variedad}`,values)
 }

  if (isLoading) {
    return(
      <div>
        Cargando ...
      </div>
    )
  }
  return (

    <section className='Crear-Producto'>

      <h1>Creando {variedad}</h1>
      <form onSubmit={handleSubmit}>

        <div className='form-control'>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={handleChange}/>
                <small>Debe ingresar un Nombre</small>
          </div>
        <div className='form-control'>
                <label htmlFor="precio">Precio</label>
                <input type="text" name="precio" id="precio" onChange={handleChange}/>
                <small>Debe ingresar un Precio</small>
          </div>

        {variedad !== "bebida" ? 

        <div>
          <div className='form-control'>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder='Escriba algo porfa' onChange={handleChange}></textarea>
                <small>Debe ingresar una descripcion</small>
          </div>
          <div className='form-control'>
            <label htmlFor="celiaco">¿Apto Celiacos?</label>
            <select name="celiaco" id="celiaco" onChange={handleChange}>
              <option value="" selected hidden>Seleccione una opcion</option>
              <option value="1">Si</option>
              <option value="0">No</option>
            </select>
          </div>

      <div className='form-control'>
        <label htmlFor="veg">¿Apto vegano?</label>
        <select name="veg" id="veg" onChange={handleChange}>
          <option value="" selected hidden>Seleccione una opcion</option>
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className='form-control'>
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" id="categoria" onChange={handleChange}>
          <option value="" selected hidden>Seleccione una opcion</option>
          {categorias.map(categoria => 
              <option value={categoria.id}> {categoria.nombre}</option>
          )}
        </select>
      </div>
        </div>
        
        
            :

            <div>
              <div className='form-control'>
                <label htmlFor="litros">Cantidad de litros</label>
                <input type="text" name="litros" id="litros" onChange={handleChange}/>
                <small>Debe ingresar una cantidad</small>
              </div>
              <div className='form-control'>
                <label htmlFor="marea">¿Marea?</label>
                <select name="marea" id="marea" onChange={handleChange}>
                  <option value="" selected hidden>Seleccione una opcion</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className='form-control'>
                <label htmlFor="gas">¿Con Gas?</label>
                <select name="gas" id="gas" onChange={handleChange}>  
                  <option value="" selected hidden>Seleccione una opcion</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className='form-control'>
                <label htmlFor="dieta">¿Es de Dieta?</label>
                <select name="dieta" id="dieta" onChange={handleChange}>
                  <option value="" selected hidden>Seleccione una opcion</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className='form-control'>
                <label htmlFor="marca">Marca</label>
                <select name="marca" id="marca" onChange={handleChange}>
                  <option value="" selected hidden>Seleccione una opcion</option>
                  {marcas.map(marca => 
                      <option value={marca.id}> {marca.nombre}</option>
                  )}
                </select>
              </div>
            </div>
        }
        <div className='form-control'>
          <button type='submit'>Crear Nuevo Producto</button>
        </div>
      </form>
    </section>
    
  )
}

export default Formulario