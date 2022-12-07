import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Contacto() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        nombre : "",
        email : "",
        telefono : "",
        mensaje : "",
    })

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
        let response = await axios.post(`http://localhost:4000/crearMensajes`,values)
        console.log(response);
        if(response.status === 200){
            return navigate('/')
        }
    }


  return (
    <main className='contacto'>
        <section>
            <h2>Comunicate con nosotros para conocer mas de la empresa</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-creator'>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre" onChange={handleChange}/>
                </div>
                <div className='form-creator'>
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" id="email" onChange={handleChange}/>
                </div>
                <div className='form-creator'>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" name="telefono" id="telefono" onChange={handleChange}/>
                </div>
                <div className='form-creator'>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" id="mensaje" cols="30" rows="10" onChange={handleChange}></textarea>
                </div>
                <div className='form-creator'>
                    <button className="bttn" type='submit'>Enviar</button>
                </div>
            </form>
        </section>
    </main>
  )
}

export default Contacto