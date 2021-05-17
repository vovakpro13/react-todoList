import React from 'react';
import {LabelImportantOutlined, Delete} from "@material-ui/icons";
import {Avatar, Button, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import s from './todo.module.css';
import db from '../firebase';

const ToDo = ({item, number}) => {
    const deleteToDo = () =>{
        db.collection('todos').doc(item.id).delete();
    }

    return <ListItem className={s.li} >
        <ListItemAvatar>
            <Avatar>
                <LabelImportantOutlined  color={'inherit'}/>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`#${number} - ${item.text}`} secondary={item.id}/>
        <Button variant={'outlined'} color={'secondary'} startIcon={<Delete/>} onClick={deleteToDo}> DELETE</Button>
    </ListItem>;
};

export default ToDo;