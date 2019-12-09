import React, { useState } from 'react';
import uuid from 'uuid/v1';

const AddTodo = ({ addTodo }) => {

    const [newTodo, setnewTodo] = useState({ id : 0, content : "" });

    const handleChange = (e) => {
        let newDataTodo = {...newTodo}
        newDataTodo[e.currentTarget.name] = e.currentTarget.value;
        setnewTodo(newDataTodo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newTodo.id = uuid();
        newTodo.content = newTodo.content.replace(/^\w/, c => c.toUpperCase());
        addTodo(newTodo);
        setnewTodo({ id : 0, content : "" });
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <label className="label-todo">Add new todo : </label>
                <input 
                    className="input"
                    placeholder="Input your new todo here.........."
                    type="text" 
                    name="content" 
                    onChange={handleChange} 
                    value={newTodo.content}
                    maxLength={60}
                />
            </form>
        </div>
    )
}

export default AddTodo;