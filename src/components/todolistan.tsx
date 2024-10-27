import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

interface Todo {
    text: string;
    completed: boolean;
}

const Todolistan = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo = { text, completed: false };
        console.log("Adding todo:", newTodo);
        setTodos([...todos, newTodo]);
    };

    const handleToggle = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <div>
            <h1>Todo lista</h1>
            <TodoList todos={todos} onToggle={handleToggle} />
            <TodoInput addTodo={addTodo} />
        </div>
    );
};

export default Todolistan;