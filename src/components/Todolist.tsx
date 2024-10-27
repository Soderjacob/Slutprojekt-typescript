import React from 'react';

interface Todo {
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    onToggle: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => onToggle(index)}
                    />
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;