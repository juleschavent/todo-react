import firebase from "firebase";

const Aside = ({ todos, todosDb }) => {

    const handleIsComplete = () => {
        let toUpdate
        firebase.database().ref("todosDb").on("value", (snapshot) => {
            toUpdate = snapshot.val()
        });

        for (const key in toUpdate) {
            const element = toUpdate[key];
            if (element.isComplete === true) {
                todosDb.child(key).remove();
            };
        };
    };

    return (
        <div className="aside">
            <p className="aside__itemsLeft">{todos && todos.length} items left</p>
            <button onClick={handleIsComplete} className="aside__clear">Clear Completed</button>
        </div>
    );

}

export default Aside;

// old code with json server
/*
    const handleIsComplete = () => {
        const newTodos = todos.filter(todo => todo.isComplete === false);
        setTodos(newTodos);
    }
*/