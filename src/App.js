import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <section className="header">
        <h1 className="header__title">TODO</h1>
        <i className="header__icon fas fa-sun"></i>
      </section>

      <TodoApp />
    </div>
  );
}

export default App;
