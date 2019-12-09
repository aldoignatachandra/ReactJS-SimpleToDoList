import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="todos collection-item" key={todo.id}>
                    <span 
                        className="todos-list"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        - {todo.content}
                    </span>
                </div>
            )
        })
    ) : (
        <div className="empty center">
            <p className="nolist center">You have no todo's left, Yay !!</p>
            <div>
                <img className="icon" src={require("../images/sunbed.png")}/>
            </div>
        </div>
    )

    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos;