import React, { useRef, useEffect, useState } from 'react';


function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default function ToDo(props) {
    const [isEditing, setEditing] = useState(false);
    const wasEditing = usePrevious(isEditing);
    const [tempToDoText, setTempToDoText] = useState('');
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);


    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);



    const onChangeHandler = (event) => {
        setTempToDoText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editToDo(props.id, tempToDoText);
        setEditing(false);
        setTempToDoText('');
    }

    const viewTemplate = (
        <div className='stack-small'>
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleStatus(props.id)} />
                <label className="todo-label" htmlFor="todo-0">
                    {props.todo_text}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)} ref={editButtonRef}>
                    Edit <span className="visually-hidden">{props.todo_text} </span>
                </button>
                <button type="button" className="btn btn__danger" onClick={() => props.deleteToDo(props.id)}>
                    Delete <span className="visually-hidden">{props.todo_text}</span>
                </button>
            </div>
        </div>
    );
    const editTemplate = (
        <form className="stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    New name for {props.todo_text}
                </label>
                <input id={props.id} className="todo-text" type="text" onChange={onChangeHandler} ref={editFieldRef}
                />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
                    Cancel
                    <span className="visually-hidden">renaming {props.todo_text}</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit" onClick={handleSubmit}>
                    Save
                    <span className="visually-hidden">new name for {props.todo_text}</span>
                </button>
            </div>
        </form>
    );
    return (<li className="todo">
        {isEditing ? editTemplate : viewTemplate}</li>
    );
}