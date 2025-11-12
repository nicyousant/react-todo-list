export default function Form({ inputValue, setInputValue, dispatch }) {
  // This happens when you click the plus button or press Enter
  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from refreshing

    if (!inputValue.trim()) return; // Don't add empty todos

    // Tell the reducer to add a new todo
    dispatch({
      type: 'ADD',
      payload: { title: inputValue, id: crypto.randomUUID(), is_completed: false },
    });

    // Clear the input box after adding
    setInputValue('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        {/* The box where you type the new todo */}
        <input
          type="text"
          name="todo"
          placeholder="Add a new task"
          value={inputValue} // value comes from state
          onChange={(e) => setInputValue(e.target.value)} // update state as you type
        />
      </label>

      {/* The plus button to add the todo */}
      <button type="submit" className="add-btn">
        <span className="visually-hidden">Submit</span>
        <svg width="24" height="24" fill="#fff">
          <path d="M12 5v14M5 12h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </form>
  );
}
