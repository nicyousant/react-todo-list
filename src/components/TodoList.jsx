import Item from './Item';

export default function TodoList({ todos, dispatch }) {
  if (!todos.length) return <p>It's time to get busy!</p>;

  return (
    <ol className="todo_list">
      {todos.map((item) => (
        <Item key={item.id} item={item} dispatch={dispatch} />
      ))}
    </ol>
  );
}
