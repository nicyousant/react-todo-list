import { useState } from 'react';

export default function Item({ item, dispatch }) {
  // Keep track if we are editing this todo
  const [isEditing, setIsEditing] = useState(false);
  // Keep track of the text when editing
  const [editValue, setEditValue] = useState(item.title);

  // Flip the completed status when clicked
  const toggleTodo = () => dispatch({ type: 'TOGGLE', payload: item.id });

  // Delete this todo
  const deleteTodo = () => dispatch({ type: 'DELETE', payload: item.id });

  // Save the new title when editing
  const saveEdit = (e) => {
    e.preventDefault();
    if (!editValue.trim()) return;
    dispatch({ type: 'EDIT', payload: { id: item.id, title: editValue } });
    setIsEditing(false);
  };

  // Show the editing form if isEditing
  if (isEditing) {
    return (
      <li className="todo_item">
        <form className="edit-form" onSubmit={saveEdit}>
          <input
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
          />
          <button type="submit">Save</button>
        </form>
      </li>
    );
  }

  // Normal todo item
  return (
    <li className="todo_item">
      <div className="todo_items_left" onClick={toggleTodo}>
        {/* The checkbox */}
        <input type="checkbox" checked={item.is_completed} readOnly />

        {/* The text of the todo */}
        <p style={item.is_completed ? { textDecoration: 'line-through' } : {}}>
          {item.title}
        </p>
      </div>

      <div className="todo_items_right">
        {/* Edit button */}
        <button onClick={() => setIsEditing(true)}>Edit</button>

        {/* Delete button only works if completed */}
        <button onClick={deleteTodo} disabled={!item.is_completed}>
          Delete
        </button>
      </div>
    </li>
  );
}
