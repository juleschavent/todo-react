import firebase from "../utils/firebaseConfig";

const TodoList = ({ todos }) => {

  const handleIsComplete = (todo) => {
    let toUpdate = firebase.database().ref("todosDb").child(todo.id);
    let tempTodo;

    toUpdate.on("value", (snapshot) => {
      tempTodo = snapshot.val()
    });

    if (tempTodo.isComplete === false) {
      toUpdate.update({
        isComplete: true
      });
    } else {
      toUpdate.update({
        isComplete: false
      });
    };
  };

  // DELETE
  const deleteItem = (todo) => {
    let toDelete = firebase.database().ref("todosDb").child(todo.id);
    toDelete.remove();
  };

  return (
    <section className="">
      {/* !!! IMPORTANT !!! ici index est une valeure automatique lorsqu'elle est passée dans map, elle génère un ID pour chaque map. C'est une des propriété de la méthode .map */}
      {todos &&
        todos.map((todo, index) => (
          <div key={index} className="todo">
            <div onClick={() => handleIsComplete(todo)}>
              <div
                className={
                  todo.isComplete
                    ? "todo__check--isComplete todo__check"
                    : "todo__check"
                }
              ></div>
              <p
                className={
                  todo.isComplete
                    ? "todo__text--isComplete todo__text"
                    : "todo__text"
                }
              >
                {todo.inputTodo}
              </p>
            </div>
            <i onClick={() => deleteItem(todo)} className="todo__delete fas fa-slash">
              <i className="todo__delete--effect fas fa-slash"></i>
            </i>
          </div>
        ))}
    </section>
  );
};

export default TodoList;

// old code with JSON server
/*
  Check if complete
  const handleIsComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };
*/