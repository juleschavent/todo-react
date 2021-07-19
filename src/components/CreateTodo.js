import { useState } from 'react';
import firebase from "../utils/firebaseConfig";

const CreateTodo = ({ setTodos, todos }) => {

    const [inputTodo, setInputTodo] = useState('');

    const handleInputTodo = (e) => {
        setInputTodo(e.target.value)
    };

    const handleTodoList = (e) => {
        e.preventDefault();
        const todosDb = firebase.database().ref("todosDb");
        const task = {
            inputTodo,
            isComplete: false
        };
        todosDb.push(task);
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

//old code with json server
/*
    // const handleTodoList = (e) => {
    //     e.preventDefault();
    //     setTodos([{
    //         title: inputTodo,
    //         isComplete: false,
    //     }, ...todos]);
    //     setInputTodo('');
    // };
*/