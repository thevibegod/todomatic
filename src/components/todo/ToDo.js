const ToDo = (props)=>{

    return (
        <li data-testid={"todo-"+props.id} className="todo stack-small">
        <div className="c-cb">
          <input id={"todo-"+props.id} data-testid={"todo-checkbox-"+props.id} type="checkbox"  onChange={()=>props.toggleTask(props.id)} defaultChecked={props.completed} />
          <label className="todo-label" data-testid="todo-text" htmlFor="todo-0">
            {props.text}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" data-testid="edit-btn" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" data-testid={"todo-del-btn-"+props.id} onClick={()=>props.deleteTask(props.id)} className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    );
}

export default ToDo;