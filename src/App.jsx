// We import React hooks we need
import { useState, useReducer } from 'react';

// Importing components that make our app look nice
import Header from './components/Header';
import TodoHero from './components/TodoHero';
import TodoList from './components/TodoList';
import Form from './components/Form';

// Import our CSS styles
import './styles.css';

// This decides what happens when we add, edit, toggle, or delete a todo
function todoReducer(todos, action) {
  switch (action.type) {
    case 'ADD':
      // We add the new todo at the top of the list
      return [action.payload, ...todos];
    case 'TOGGLE':
      // We flip the completed status of the todo (true becomes false, false becomes true)
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, is_completed: !todo.is_completed } : todo
      );
    case 'DELETE':
      // We remove the todo that matches the id
      return todos.filter((todo) => todo.id !== action.payload);
    case 'EDIT':
      // We update the title of the todo that matches the id
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
      );
    default:
      // If we don't know the action, just return the current list
      return todos;
  }
}


export default function App() {
  // useReducer keeps track of the todos 
  const [todos, dispatch] = useReducer(todoReducer, [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
  ]);

  // useState keeps track of what is typed in the "new todo" input box
  const [inputValue, setInputValue] = useState('');

  // Count total todos and completed todos for the circle in TodoHero
  const total = todos.length;
  const completed = todos.filter((t) => t.is_completed).length;

  return (
    <div className="wrapper">
      <Header />
      <TodoHero todos_completed={completed} total_todos={total} />
      <Form inputValue={inputValue} setInputValue={setInputValue} dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}
