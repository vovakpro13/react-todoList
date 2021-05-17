import React, {useEffect, useState} from 'react';
import ToDoList from "./ToDoList";
import {TextField, Fab, CircularProgress} from "@material-ui/core";
import {Add, List} from "@material-ui/icons";
import db from '../firebase';
import firebase from "firebase";
import s from './todo.module.css';


const ToDoListForm = () => {
    const [toDoList, setToDos] = useState(null);
    const [input, setinput] = useState('');

    useEffect(() => db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setToDos(snapshot.docs.map(doc => ({id:doc.id ,text: doc.data().text}) ))
    }), []);

    const add = () =>{
        db.collection('todos').add({text: input, timestamp: firebase.firestore.FieldValue.serverTimestamp()})
        setToDos([...toDoList, input]);
        setinput('');
    }
    return toDoList ?
        <div>
            <h2 className={s.title}><List className={s.list_icon}/> Your ToDo list</h2>
            <form className={s.form}>
                <TextField label={'New task'} value={input} onChange={e => setinput(e.target.value)}/>
                <Fab type={'submit'} disabled={!input} onClick={add} size={'small'}><Add/></Fab>
            </form>
            <ToDoList list={toDoList}/>
        </div>
     : <CircularProgress size={'70px'} className={s.load}/>
};

export default ToDoListForm;