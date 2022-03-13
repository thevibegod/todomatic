import React,{useState} from "react";
export default function Form(props){

    const [data, setData] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if(data===''){
            alert("Enter something.");
            return;
        }
        props.addToDo(data);
        setData('');
      }
      
    
      const onChangeHandler = (event) => {
          event.preventDefault();
          setData(event.target.value);
      }
    return (
        <form>
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
          autoComplete="off" onChange={onChangeHandler}
          required
        />
        <button type="submit" onClick={handleSubmit} className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
    );
}