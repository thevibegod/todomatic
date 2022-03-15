const ToDo = (props)=>{
    return (
        <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" data-testid="checkbox" defaultChecked={props.checked} />
          <label className="todo-label" data-testid="todo-text" htmlFor="todo-0">
            {props.text}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" data-testid="edit-btn" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" data-testid="del-btn" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    );
}

export default ToDo;