import React from 'react';
import {LabelImportantOutlined} from "@material-ui/icons";
import {Avatar, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import s from './todo.module.css';

const ToDo = ({item, number}) => {
    return <ListItem className={s.li} button>
        <ListItemAvatar>
            <Avatar>
                <LabelImportantOutlined  color={'inherit'}/>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`#${number} - ${item}`} secondary={item}/>
    </ListItem>;
};

export default ToDo;