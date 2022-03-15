const FilterButton = (props) => {
    return (
        <button type="button" data-testid="filter-btn" className="btn toggle-btn" aria-pressed={props.ariaPressed}>
            <span className="visually-hidden">Show </span>
            <span data-testid="filter-text">{props.value}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
}


export default FilterButton;