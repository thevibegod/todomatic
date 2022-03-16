import { useState } from "react";

const ToDo = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [data, setData] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    props.updateTask(props.id, data);
    setData('');
    setIsEditing(false);
  }

  const onChangeHandler = event => {
    setData(event.target.value);
  }

  return isEditing ? (
    <form className="stack-small">
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.text}
        </label>
        <input id={props.id} data-testid="update-box" className="todo-text" type="text" onChange={onChangeHandler}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => setIsEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.text}</span>
        </button>
        <button type="submit" data-testid="update-submit-btn" className="btn btn__primary todo-edit" onClick={handleSubmit}>
          Save
          <span className="visually-hidden">new name for {props.text}</span>
        </button>
      </div>
    </form>
  ) : (
    <li data-testid={"todo-" + props.id} className="todo stack-small">
      <div className="c-cb">
        <input id={"todo-" + props.id} data-testid={"todo-checkbox-" + props.id} type="checkbox" onChange={() => props.toggleTask(props.id)} defaultChecked={props.completed} />
        <label className="todo-label" data-testid={"todo-text-" + props.id} htmlFor={"todo-" + props.id}>
          {props.text}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" data-testid={"todo-edit-btn-" + props.id} className="btn" onClick={() => setIsEditing(true)}>
          Edit <span className="visually-hidden">  {props.text}</span>
        </button>
        <button type="button" data-testid={"todo-del-btn-" + props.id} onClick={() => props.deleteTask(props.id)} className="btn btn__danger">
          Delete <span className="visually-hidden">  {props.text}</span>
        </button>
      </div>
    </li>
  );
}

export default ToDo;