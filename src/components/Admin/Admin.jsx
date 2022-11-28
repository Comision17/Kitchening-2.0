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
  

function Admin() {

    const [carta , setCarta] = useState([])
    const [loading , setLoading] = useState(true)
    const [value, setValue] = useState('1');
    const [secondary, setSecondary] = useState(false);

    useEffect(() => {
        fetch("http://localhost:4000/productos")
        .then((response) => response.json())
        .then((valores) => {
        setCarta(valores.data);
        setTimeout(() => {
            setLoading(false)
        }, 5000);
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
                    <Lista 
                        imagen = {entrada.imagen}
                        nombre = {entrada.nombre}
                        categoria = "entradas"
                        descripcion = {`${entrada.descripcion}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Bebidas</h1>
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
                    <Lista 
                        imagen = {bebida.imagen}
                        nombre = {bebida.nombre}
                        categoria = "bebidas"
                        descripcion = {`${bebida.litrosDimensionales}ml`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>Guarniciones</h1>
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
                    <Lista 
                        imagen = {guarnicion.imagen}
                        nombre = {guarnicion.nombre}
                        categoria = "guarniciones"
                        descripcion = {`${guarnicion.aderesos}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>Postres</h1>
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
                    <Lista 
                        imagen = {postre.imagen}
                        nombre = {postre.nombre}
                        categoria = "postres"
                        descripcion = {`${postre.descripcion}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                )
            }
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1>Platos</h1>

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
                    <Lista 
                        imagen = {platos.imagen}
                        nombre = {platos.nombre}
                        categoria = "platos"
                        descripcion = {`${platos.descripcion}`}
                        secondary = {secondary}
                        setSecondary = {setSecondary}
                    />
                )
            }
        </div>
      </TabPanel>
    </Box>
  )
}

export default Admin