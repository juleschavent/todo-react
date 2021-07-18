const Aside = ({ todos, setTodos }) => {

    const handleIsComplete = () => {
        const newTodos = todos.filter(todo => todo.isComplete === false);
        setTodos(newTodos);
    }

    return (
        <div className="aside">
            <p className="aside__itemsLeft">{todos && todos.length} items left</p>
            <button onClick={handleIsComplete} className="aside__clear">Clear Completed</button>
        </div>
    );
    
}

export default Aside;