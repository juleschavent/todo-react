const Aside = (props) => {

    const todos = props.todos;

    let numItems = 0;

    if (todos) {
        for (let i = 0; i < todos.length; i++) {
            numItems += 1;
        }
    };

    return (
        <div className="aside">
            <p className="aside__itemsLeft">{numItems} items left</p>
            <button className="aside__clear">Clear Completed</button>
        </div>
    );

}

export default Aside;