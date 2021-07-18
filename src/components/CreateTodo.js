import { useState } from 'react';

const CreateTodo = ({ setTodos, todos }) => {

    const [inputTodo, setInputTodo] = useState('');

    const handleInputTodo = (e) => {
        setInputTodo(e.target.value)
    };

    const handleTodoList = (e) => {
        e.preventDefault();
        setTodos([{
            title: inputTodo,
            isComplete: false,
        }, ...todos]);
        setInputTodo('');
    };

    return (
        <section className="todos">
            <section className="todo">
                <div>
                    <div onClick={handleTodoList} className="todo__add"><i className="fas fa-plus"></i></div>
                    <input value={inputTodo} onChange={handleInputTodo} className="todo__text todo__input" type="text" placeholder="Add a todo..." />
                </div>
            </section>
        </section >
    );

};

export default CreateTodo;