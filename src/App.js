import FilterButton from "./components/filterbutton/FilterButton";
import Form from "./components/form/Form";
import ToDo from "./components/todo/ToDo";

const App = () => {
  return (
    <div className="todoapp stack-large">
      <h1 data-testid="title">TodoMatic</h1>
      <Form/>
      <div className="filters btn-group stack-exception" data-testid="filter-btn-grp">
        <FilterButton ariaPressed={true} value="All" />
        <FilterButton ariaPressed={false} value="Active" />
        <FilterButton ariaPressed={false} value="Completed" />
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
        data-testid="todo-list"
      >
        <ToDo checked={true} text="Eat" />
        <ToDo checked={false} text="Sleep" />
        <ToDo checked={false} text="Repeat" />
      </ul>
    </div>);
}

export default App;