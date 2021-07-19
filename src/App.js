import { useEffect, useState } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import firebase from "./utils/firebaseConfig";
import { StyledFirebaseAuth } from "react-firebaseui";

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setSignedIn(!!user);
      // console.log(user);
    });
  }, []);

  return (
    <div className="App">
      {isSignedIn ? (
        <>
          <section className="header">
            <h1 className="header__title">TODO</h1>
            <div className="user">
              <h2 className="user__name">
                {firebase.auth().currentUser.displayName}
              </h2>
              <button
                className="user__logout"
                onClick={() => firebase.auth().signOut()}
              >
                Logout
              </button>
            </div>
          </section>
          <TodoApp />
        </>
      ) : (
        <div className="signIn">
          <h2 className="signIn__title">Todo App with React & Firebase</h2>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </div>
      )}
    </div>
  );
}

export default App;


//test