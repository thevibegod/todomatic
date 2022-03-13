import ToDo from "./components/ToDo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function App(props) {

  const addToDo = (todo) => {
    setToDoList([...toDoList, { id: "todo-" + nanoid(), "todo_text": todo, completed: false }]);
  }

  const TASKS = [
    { id: "todo-" + nanoid(), todo_text: "Eat", completed: true },
    { id: "todo-" + nanoid(), todo_text: "Sleep", completed: false },
    { id: "todo-" + nanoid(), todo_text: "Repeat", completed: false },
  ]

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);


  const toggleToDo = (id) => {
    const todos = toDoList.map((todo) => {
      if (todo.id === id) {
        let todo_temp = todo;
        todo_temp.completed = !todo_temp.completed;
        return todo_temp;
      }
      return todo;
    });
    setToDoList(todos);
  }

  const deleteToDo = (id) => {
    const todos = toDoList.filter((todo) => id !== todo.id);
    setToDoList(todos);
  }

  const editToDo = (id, newToDo) => {
    const todos = toDoList.map(todo => {
      if (todo.id === id) {
        return { ...todo, todo_text: newToDo };
      }
      return todo;
    })
    setToDoList(todos);
  }

 
  const [toDoList, setToDoList] = useState(TASKS);
  const [filter, setFilter] = useState('All');
  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(toDoList.length);
  const tasksNoun = toDoList.filter(FILTER_MAP[filter]).length !== 1 ? 'tasks' : 'task';
  const headingText = `${toDoList.filter(FILTER_MAP[filter]).length} ${tasksNoun} remaining`;

  useEffect(() => {
    if (toDoList.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [toDoList.length, prevTaskLength]);


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addToDo={addToDo} />
      <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map(name => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ))}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {toDoList.filter(FILTER_MAP[filter]).map(value => {
          return (
            <ToDo key={value.id} id={value.id} todo_text={value.todo_text} completed={value.completed}
              toggleStatus={toggleToDo} deleteToDo={deleteToDo} editToDo={editToDo} />
          );
        })}
      </ul>
    </div>
  );
}