import React, { useState } from 'react';

interface TodoInputProps {
    addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleAdd = () => {
        addTodo(text);
        setText('');
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Skriv din text här'
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <button onClick={handleAdd}>Lägg till</button>
        </div>
    );
};

export default TodoInput;