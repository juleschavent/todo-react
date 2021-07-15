import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import './Todo.css';
import { useEffect, useState } from "react";
import Aside from "./Aside";

const TodoApp = () => {

    const [todos, setTodos] = useState(null);

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
                <TodoList todos={todos} setTodos={setTodos}/>
                <Aside />
            </section>
        </div>
    );

};

export default TodoApp;