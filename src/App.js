import { nanoid } from "nanoid";
import { useState } from "react";
import FilterButton from "./components/filterbutton/FilterButton";
import Form from "./components/form/Form";
import ToDo from "./components/todo/ToDo";

const App = (props) => {

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
    let task = {id:nanoid(),text:data,completed:false};
    setTasks([...tasks,task]);
  }

  const deleteTask = (id) => {
    const modifiedTasks = tasks.filter(task=>task.id !== id);
    setTasks(modifiedTasks);
  }

  const updateTask = (id,name) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: name };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  const [tasks, setTasks] = useState(props.tasks || []);
  return (
    <div className="todoapp stack-large">
      <h1 data-testid="title">TodoMatic</h1>
      <Form addTaskHandler={addTask}/>
      <div className="filters btn-group stack-exception" data-testid="filter-btn-grp">
        <FilterButton ariaPressed={true} value="All" />
        <FilterButton ariaPressed={false} value="Active" />
        <FilterButton ariaPressed={false} value="Completed" />
      </div>
      <h2 data-testid="tasks-count" id="list-heading">
        {tasks.length === 1 ? '1 task remaining' : `${tasks.length} tasks remaining`}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
        data-testid="todo-list"
      >
        {tasks.map(task => {
          return <ToDo text={task.text} completed={task.completed} id={task.id} key={task.id}
           toggleTask={toggleTask} deleteTask={deleteTask} updateTask={updateTask}/>
        })}
      </ul>
    </div>);
}

export default App;