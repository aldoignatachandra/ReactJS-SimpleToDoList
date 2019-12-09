import React , { useState }from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import Materialize from 'materialize-css'
import '../styles/AppStyle.css';

const App = () => {

  const [todos, setTodos] = useState([
    { id: 1, content: "Buy some milk" },
    { id: 2, content: "Play mario kart" }
  ]);

  const deleteTodo = (id) => {
    const currentTodo = todos.filter(todo => {
      return todo.id !== id
    })
    showToast("Success Delete Todo!", "green");
    setTodos(currentTodo);
  }

  const addTodo = (todo) => {
    if (todo.content !== "") {
      if (todos.filter(curTodo => curTodo.content === todo.content).length > 0) {
        showToast(`Todo "${todo.content}" Already Exist`, "red");
      } else {
        let currentTodo = [...todos, todo];
        setTodos(currentTodo);
        showToast("Success Add New Todo!", "green");
      }
    } else {
      showToast("New Todo Cannot Be Empty!", "red");
    }
  }

  const showToast = (text, color) => {
    Materialize.toast({
        html: text,
        displayLength: 2000,
        classes: `rounded ${color} bold-text`
    });
  }
  
  return (
    <div className="todo-app container">
      <p className="title center white-text">Todo's</p>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
