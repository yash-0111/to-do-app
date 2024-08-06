import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit, faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

function Todo({ todo, index, completeTodo, removeTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleEdit = () => {
        editTodo(index, newText);
        setIsEditing(false);
    };

    return (
        <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {isEditing ? (
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    onBlur={handleEdit}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleEdit();
                        }
                    }}
                />
            ) : (
                <span>{todo.text}</span>
            )}
            <div>
                <FontAwesomeIcon
                    icon={faCheck}
                    onClick={() => completeTodo(index)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                />
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => removeTodo(index)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                />
                <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => setIsEditing(true)}
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                />
                <FontAwesomeIcon
                    icon={isExpanded ? faCompress : faExpand}
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ cursor: 'pointer' }}
                />
            </div>
            {isExpanded && (
                <div>
                    <small>Last updated: {new Date(todo.lastUpdated).toLocaleString()}</small>
                </div>
            )}
        </div>
    );
}

export default Todo;
