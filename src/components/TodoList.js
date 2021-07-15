import './Todo.css';


const TodoList = ({ todos, setTodos }) => {

    const handleDelete = index => {
        const newTodos = [...todos]
        // console.log(newTodos)
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }


    return (
        <section className="">
            {todos && todos.map(todo =>
                <div key={todo.id} className="todo">
                    <div>
                        <div className="todo__check"></div>
                        <p className="todo__text" >{todo.title}, {todo.id}</p>
                    </div>
                    <i onClick={() => handleDelete(index)} className="todo__delete fas fa-slash"><i className="todo__delete--effect fas fa-slash"></i></i>
                </div>
            )}
        </section>
    );

}

export default TodoList;