import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function Lista(props) {

    const navigate = useNavigate();

    const handleDelete = () => {
        Swal.fire({
            title: '¿Estas seguro de querer eliminar este producto?',
            text: "Esta accion es Irreversible, como qatar perdiendo el mundial",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Elimina todo!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:4000/productos/admin/eliminar/${props.id}?categoria=${props.categoria}`)
                .then(productoEliminado => {
                    Swal.fire(
                        'Producto eliminado!',
                        `${props.nombre}.`,
                        'success'
                    )
                    window.location.reload(true);
                })
            }
        })
    }

    return (
        <List>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src={`/images/productos/${props.categoria}/${props.imagen}`} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.nombre}
                    secondary={props.secondary ? props.descripcion : null}
                />
            </ListItem>
        </List>
    )
}

export default Lista