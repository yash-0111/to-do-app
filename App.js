import React, { useState, useEffect } from 'react';
import Todo from './components/todo';
import TodoForm from './components/todoform';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const addTodo = (text) => {
        const newTodos = [...todos, { text, isCompleted: false, lastUpdated: new Date().toISOString() }];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        newTodos[index].lastUpdated = new Date().toISOString();
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const editTodo = (index, text) => {
        const newTodos = [...todos];
        newTodos[index].text = text;
        newTodos[index].lastUpdated = new Date().toISOString();
        setTodos(newTodos);
    };

    const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="App">
            <h1>To-Do App</h1>
            <input
                type="text"
                placeholder="Search tasks"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="todo-list">
                {filteredTodos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;
