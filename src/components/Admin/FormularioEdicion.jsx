import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function FormularioEdicion() {

  const navigate = useNavigate();
  const [variedad, setVariedad] = useState('entrada')
  const [categorias,setCategorias] = useState([])
  const [id,setId] = useState('0')
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

  const buscarCategoria = (id) => {
    let nombreCategoria
    categorias.forEach(categoria => categoria.id === id ? nombreCategoria = categoria.nombre : "Sin Categoria")
    return nombreCategoria
  }
  const buscarMarca = (id) => {
    let nombreMarca
    marcas.forEach(marca => marca.id === id ? nombreMarca = marca.nombre : "Sin Marca")
    return nombreMarca
  }

  useEffect(()=>{
    let barra = actualUrl.lastIndexOf('/') + 1
    let id = actualUrl.substring(barra,100)
    let UrlSinId = actualUrl.substring(0,barra - 1)
    let nuevaBarra = UrlSinId.lastIndexOf('/') + 1 
    let variedad = UrlSinId.substring(nuevaBarra)
    setId(id)
    setVariedad(variedad)
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
        fetch(`http://localhost:4000/productos/detalle/${id}?variedad=${variedad}`)
        .then((respuesta2) => respuesta2.json())
        .then((producto) => {
          setValues(producto.data[0])
          setIsLoading(false)
        })
      })
    })
    .catch(error => console.log(error))
  },[isLoading])

  console.log(values);
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
    let response = await axios.put(`http://localhost:4000/productos/admin/editar/${id}?variedad=${variedad}`,values)
    console.log(response);
    if(response.status === 200){
      return navigate('/admin/productos')
    }
 }
 console.log(id);

  if (isLoading) {
    return(
      <div>
        Cargando ...
      </div>
    )
  }
  return (

    <section className='Crear-Producto'>
      <h1>Editando {variedad}</h1>
      <form onSubmit={handleSubmit}>

        <div className='form-control'>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" value={values.nombre} onChange={handleChange}/>
                <small>Debe ingresar un Nombre</small>
          </div>
        <div className='form-control'>
                <label htmlFor="precio">Precio</label>
                <input type="text" name="precio" id="precio" value={values.precio} onChange={handleChange}/>
                <small>Debe ingresar un Precio</small>
          </div>

        {variedad !== "bebidas" ? 

        <div>
          <div className='form-control'>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="10" value={values.descripcion} placeholder='Escriba algo porfa' onChange={handleChange}></textarea>
                <small>Debe ingresar una descripcion</small>
          </div>
          <div className='form-control'>
            <label htmlFor="celiaco">¿Apto Celiacos?</label>
            <select name="celiaco" id="celiaco" onChange={handleChange}>
              <option defaultValue={values.celiaco} hidden>{values.celiaco === 1 ? "Si" : "No"}</option>
              <option value="1">Si</option>
              <option value="0">No</option>
            </select>
          </div>

      <div className='form-control'>
        <label htmlFor="veg">¿Apto vegano?</label>
        <select name="veg" id="veg" onChange={handleChange}>
          <option defaultValue={values.veg} hidden>{values.veg === 1 ? "Si" : "No"}</option>
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className='form-control'>
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" id="categoria" onChange={handleChange}>
          <option defaultValue={values.categoriaId} selected hidden>{buscarCategoria(values.categoriaId)}</option>
          {categorias.map(categoria => 
              <option value={categoria.id}> {categoria.nombre}</option>
          )}
        </select>
      </div>
        </div>
        
        
            :

            <div>
              <div className='form-control'>
                <label htmlFor="litrosDimensionales">Cantidad de litros</label>
                <input type="text" name="litrosDimensionales" id="litrosDimensionales" value={values.litrosDimensionales} onChange={handleChange}/>
                <small>Debe ingresar una cantidad</small>
              </div>
              <div className='form-control'>
                <label htmlFor="marea">¿Marea?</label>
                <select name="marea" id="marea" onChange={handleChange}>
                  <option defaultValue={values.marea} selected hidden>{values.marea === 1 ? "Si" : "No"}</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className='form-control'>
                <label htmlFor="gas">¿Con Gas?</label>
                <select name="gas" id="gas"  onChange={handleChange}>  
                  <option defaultValue={values.conGas} selected hidden>{values.conGas === 1 ? "Si" : "No"}</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className='form-control'>
                <label htmlFor="dieta">¿Es de Dieta?</label>
                <select name="dieta" id="dieta" onChange={handleChange}>
                  <option defaultValue={values.dieta} hidden>{values.dieta === 1 ? "Si" : "No"}</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className='form-control'>
                <label htmlFor="marca">Marca</label>
                <select name="marca" id="marca" onChange={handleChange}>
                  <option defaultValue={values.marcaId} selected hidden>{buscarMarca(values.marcaId)}</option>
                  {marcas.map(marca => 
                      <option value={marca.id}> {marca.nombre}</option>
                  )}
                </select>
              </div>
            </div>
        }
        <div className='form-control'>
          <button type='submit'>
            Editar Producto
          </button>
        </div>
      </form>
    </section>
    
  )
}

export default FormularioEdicion