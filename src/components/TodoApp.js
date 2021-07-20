import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import "./Todo.css";
import { useEffect, useState } from "react";
import Aside from "./Aside";
import firebase from "../utils/firebaseConfig";

const TodoApp = () => {
  const [todos, setTodos] = useState(null);
  const todosDb = firebase.database().ref("todosDb");

  //READ
  useEffect(() => {
    todosDb.on("value", (snapshot) => {
      let previousList = snapshot.val();
      let list = [];
      for (let id in previousList) {
        list.push({ id, ...previousList[id] });
      };
      setTodos(list);
    });
  }, []);
  //READ END

  return (
    <div className="container">
      <CreateTodo todos={todos} setTodos={setTodos} todosDb={todosDb} />
      <section className="todos">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          todosDb={todosDb}
        />
        <Aside todos={todos} setTodos={setTodos} todosDb={todosDb}/>
      </section>
    </div>
  );
};

export default TodoApp;

// Ancien code data sur json server
/*
useEffect(() => {
    fetch('http://localhost:3001/todos/')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setTodos(data);
        })
}, []);


const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
*/
