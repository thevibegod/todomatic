/* eslint-disable jsx-a11y/no-redundant-roles */
import { nanoid } from "nanoid";
import { useState } from "react";
import FilterButton from "./components/filterbutton/FilterButton";
import Form from "./components/form/Form";
import ToDo from "./components/todo/ToDo";

const App = (props) => {

  const TASK_FILTERS = { All: task => true, Active: task => !task.completed, Completed: task => task.completed };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const addTask = (data) => {
    let task = { id: nanoid(), text: data, completed: false };
    setTasks([...tasks, task]);
  }

  const deleteTask = (id) => {
    const modifiedTasks = tasks.filter(task => task.id !== id);
    setTasks(modifiedTasks);
  }

  const updateTask = (id, name) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: name };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const [tasks, setTasks] = useState(props.tasks || []);
  const [filter, setFilter] = useState('All');
  return (
    <div className="todoapp stack-large">
      <h1 data-testid="title">TodoMatic</h1>
      <Form addTaskHandler={addTask} />
      <div className="filters btn-group stack-exception" data-testid="filter-btn-grp">
        {Object.keys(TASK_FILTERS).map((element, index) => {
          return element === filter ? <FilterButton key={index} ariaPressed={true} value={element}
            setFilter={setFilter} /> : <FilterButton key={index} ariaPressed={false} value={element} setFilter={setFilter} />;
        })}
      </div>
      <h2 data-testid="tasks-count" id="list-heading">
        {tasks.filter(TASK_FILTERS[filter]).length === 1 ? '1 task remaining' : `${tasks.filter(TASK_FILTERS[filter]).length} tasks remaining`}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
        data-testid="todo-list"
      >
        {tasks.filter(TASK_FILTERS[filter]).map(task => {
          return <ToDo text={task.text} completed={task.completed} id={task.id} key={task.id}
            toggleTask={toggleTask} deleteTask={deleteTask} updateTask={updateTask} />
        })}
      </ul>
    </div>);
}

export default App;