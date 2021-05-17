import React from 'react';
import {List, ListItem, ListItemText, ListSubheader} from "@material-ui/core";
import {LabelImportantOutlined} from "@material-ui/icons";
import ToDo from "./ToDo";

const ToDoList = ({list}) => {
    return (
        <List component="nav" style={{textAlign: 'center', width: '500px', margin: '0 auto'}}>
            {
                list.map((item, i) => <ToDo key={i} item={item} number={i + 1}/>)
            }
        </List>
    );
}

export default ToDoList;