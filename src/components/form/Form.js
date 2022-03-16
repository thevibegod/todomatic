import { useState } from "react";

const Form = (props) => {
  const [data, setData] = useState('');
  const onClickHandler = (event) => {
    event.preventDefault();
    props.addTaskHandler(data);
    setData('');
  }
  return (
    <form data-testid="form">
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        data-testid="form-textbox"
        onChange={(event) => setData(event.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg" onClick={onClickHandler} data-testid="add-btn">
        Add
      </button>
    </form>
  );
}

export default Form;