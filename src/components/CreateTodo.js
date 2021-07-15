import { useState } from 'react';
import './Todo.css';

const CreateTodo = ({ setTodos, todos }) => {

    const [inputTodo, setInputTodo] = useState('');
    const [incId, setIncId] = useState(0);


    const handleInputTodo = (e) => {
        setInputTodo(e.target.value)
    };

    const handleTodoList = (e) => {
        e.preventDefault();
        setIncId(incId + 1)
        setTodos([{
            id: incId,
            title: inputTodo,
            isComplete: false,
        }, ...todos]);
        console.log(todos)
    };

    return (
        <section className="todos">
            <section className="todo">
                <div>
                    <div onClick={handleTodoList} className="todo__add"><i className="fas fa-plus"></i></div>
                    <input onChange={handleInputTodo} className="todo__text todo__input" type="text" placeholder="Add a todo..." />
                </div>
            </section>
        </section >
    );

};

export default CreateTodo;