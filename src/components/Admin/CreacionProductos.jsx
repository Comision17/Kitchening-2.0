import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Lista from './Lista';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  

function CreacionProductos() {

    const [carta , setCarta] = useState([])
    const [loading , setLoading] = useState(true)
    const [value, setValue] = useState(0);
    const [secondary, setSecondary] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/productos")
        .then((response) => response.json())
        .then((valores) => {
        setCarta(valores.data);
        setTimeout(() => {
            setLoading(false)
        }, 2000);
        })
        .catch(error => console.log(error))
    }, [loading])
    
    console.log(value)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Entradas" />
        <Tab label="Bebidas" />
        <Tab label="Guarniciones" />
        <Tab label="Postres" />
        <Tab label="Platos" />
      </Tabs>
      </Box>
        <FormControlLabel
                control={
                    <Checkbox
                        checked={secondary}
                        onChange={(event) => setSecondary(event.target.checked)}
                    />
                }
                label="Mostrar Descripcion"
        />
      <TabPanel value={value} index={0}>
        <h1>Entradas</h1>
        <NavLink to="/admin/crear/entrada">
            <Button variant="contained" color="success">Crear entrada</Button>
        </NavLink>
        <div>
            {
                loading ? 

                <div>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </div>

                :

                carta[0].entradas.map(entrada => 
                  <NavLink to={`/admin/editar/entradas/${entrada.id}`}>
                    <Lista 
                        id = {entrada.id}
                        imagen = {entrada.imagen}
                        nombre = {entrada.nombre}
                        categoria = "entradas"
                        descripcion = {`${entrada.descripcion}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                  </NavLink>
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Bebidas</h1>
        <NavLink to="/admin/crear/bebida">
            <Button variant="contained" color="success">Crear bebida</Button>
        </NavLink>
        <div>
            {
                loading ? 

                <div>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </div>

                :

                carta[0].bebidas.map(bebida => 
                  <NavLink to={`/admin/editar/bebidas/${bebida.id}`}>
                    <Lista 
                        id = {bebida.id}
                        imagen = {bebida.imagen}
                        nombre = {bebida.nombre}
                        categoria = "bebidas"
                        descripcion = {`${bebida.litrosDimensionales}ml`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                  </NavLink>
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>Guarniciones</h1>
        <NavLink to="/admin/crear/guarnicion">
            <Button variant="contained" color="success">Crear guarnicion</Button>
        </NavLink>
        <div>
            {
                loading ? 

                <div>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </div>

                :

                carta[0].guarniciones.map(guarnicion => 
                  <NavLink to={`/admin/editar/guarniciones/${guarnicion.id}`}>
                    <Lista 
                        id = {guarnicion.id}
                        imagen = {guarnicion.imagen}
                        nombre = {guarnicion.nombre}
                        categoria = "guarniciones"
                        descripcion = {`${guarnicion.aderesos}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                  </NavLink>
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>Postres</h1>
        <NavLink to="/admin/crear/postre">
            <Button variant="contained" color="success">Crear postre</Button>
        </NavLink>
        <div>
            {
                loading ? 

                <div>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </div>

                :

                carta[0].postres.map(postre => 
                  <NavLink to={`/admin/editar/postres/${postre.id}`}>
                    <Lista 
                        id = {postre.id}
                        imagen = {postre.imagen}
                        nombre = {postre.nombre}
                        categoria = "postres"
                        descripcion = {`${postre.descripcion}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                  </NavLink>
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1>Platos</h1>
        <NavLink to="/admin/crear/plato">
            <Button variant="contained" color="success">Crear plato</Button>
        </NavLink>
        <div>
            {
                loading ? 

                <div>
                    <Skeleton />
                    <Skeleton animation="wave" />
                    <Skeleton animation={false} />
                </div>

                :

                carta[0].platos.map(platos => 
                  <NavLink to={`/admin/editar/platos/${platos.id}`}>
                    <Lista 
                        id = {platos.id}
                        imagen = {platos.imagen}
                        nombre = {platos.nombre}
                        categoria = "platos"
                        descripcion = {`${platos.descripcion}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                  </NavLink>
                )
            }
        </div>
      </TabPanel>
    </Box>
  )
}

export default CreacionProductos