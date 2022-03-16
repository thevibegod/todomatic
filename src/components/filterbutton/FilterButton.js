const FilterButton = (props) => {
    return (
        <button type="button" data-testid={`filter-btn-${props.value}`} onClick={() => props.setFilter(props.value)} className="btn toggle-btn" aria-pressed={props.ariaPressed}>
            <span className="visually-hidden">Show </span>
            <span data-testid="filter-text">{props.value}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
}


export default FilterButton;