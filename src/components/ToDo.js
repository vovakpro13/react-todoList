import React, {useState} from 'react';
import {Delete, Edit, LabelImportantOutlined} from "@material-ui/icons";
import {Avatar, Button, Fab, ListItem, ListItemAvatar, ListItemText, Modal, TextField} from "@material-ui/core";
import s from './todo.module.css';
import db from '../firebase';


const ToDo = ({item, number}) => {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(item.text);

    const deleteToDo = () => {
        db.collection('todos').doc(item.id).delete();
    }

    const update = () => {
        db.collection('todos').doc(item.id).set({text: input}, {merge: true})
        setOpen(false);
    }
    return (
        <>
            <Modal aria-labelledby="simple-modal-title"
                   aria-describedby="simple-modal-description"
                   open={open}
                   onClose={e => setOpen(false)}
                   className={s.window}>
                <div className={s.modal}>
                    <form>
                        <TextField variant="outlined" value={input} onChange={e => setInput(e.target.value)}/><br/>

                        <div className={s.modalBtns}>
                            <Button type={'submit'} disabled={input === item.text} onClick={update}
                                    variant="outlined">Update</Button>
                            <Button variant="contained" color={'secondary'} onClick={e => setOpen(false)}>Back</Button>
                        </div>
                    </form>
                </div>
            </Modal>

            <ListItem className={s.li}>
                <ListItemAvatar>
                    <Avatar>
                        <LabelImportantOutlined color={'inherit'}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<h3>{item.text}</h3>} secondary={`ID:${item.id}`}/>

                <div className={s.btns}>
                    <Fab size={'small'} onClick={e => setOpen(true)}><Edit/></Fab>
                    <Fab size={'small'} color={'secondary'} onClick={deleteToDo}> <Delete/></Fab>
                </div>
            </ListItem>
        </>
    );
};

export default ToDo;