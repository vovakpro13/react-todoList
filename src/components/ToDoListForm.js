import React, {useEffect, useState} from 'react';
import ToDoList from "./ToDoList";
import {TextField, Fab, CircularProgress} from "@material-ui/core";
import {Add, List} from "@material-ui/icons";
import db from '../firebase';
import firebase from "firebase";


const ToDoListForm = () => {
    const [toDoList, setToDos] = useState(null);
    const [input, setinput] = useState('');

    useEffect(() => db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        console.log(snapshot.docs.map(doc => doc.data().text))
        setToDos(snapshot.docs.map(doc => doc.data().text))
    }), []);

    const add = () =>{
        db.collection('todos').add({text: input, timestamp: firebase.firestore.FieldValue.serverTimestamp()})
        setToDos([...toDoList, input]);
        setinput('');
    }
    return toDoList ?
        <div>
            <h3 ><List/>Your ToDo list</h3>
            <form >
                <TextField label={'todo'} value={input} onChange={e => setinput(e.target.value)}/>
                <Fab type={'submit'} disabled={!input} onClick={add} size={'small'}><Add/></Fab>
            </form>
            <ToDoList list={toDoList}/>
        </div>
     : <CircularProgress/>
};

export default ToDoListForm;