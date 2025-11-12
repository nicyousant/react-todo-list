export default function TodoHero({ todos_completed, total_todos }) {
  return (
    <section className="todohero_section">
      <div>
        {/* <p>Task Done</p> */}
        <p>Make progress every day!</p>
      </div>

      {/* circle showing how many todos are completed out of total */}
      <div className="todohero_circle">
        {todos_completed} / {total_todos}
      </div>
    </section>
  );
}
