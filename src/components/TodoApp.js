import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import './Todo.css';
import { useEffect, useState } from "react";
import Aside from "./Aside";

const TodoApp = () => {

    const [todos, setTodos] = useState(null);

    const handleDelete = index => {
        const newTodos = [...todos]
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    useEffect(() => {
        fetch('http://localhost:3001/todos/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTodos(data);
            })
    }, []);

    return (
        <div className="container">
            <CreateTodo todos={todos} setTodos={setTodos} />
            <section className="todos">
                <TodoList todos={todos} setTodos={setTodos} handleDelete={handleDelete} />
                <Aside todos={todos} setTodos={setTodos} handleDelete={handleDelete} />
            </section>
        </div>
    );

};

export default TodoApp;