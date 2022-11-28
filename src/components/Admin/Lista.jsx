import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


function Lista(props) {

    return (
        <List>
            <ListItem
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
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