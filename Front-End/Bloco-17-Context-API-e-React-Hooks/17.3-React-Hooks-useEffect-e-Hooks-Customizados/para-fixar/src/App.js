
function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <label htmlFor="list">
        <input id="list"></input>
      </label>
      <button type="button" onClick={ () => handleClick }>Acrescentar</button>
    </div>
  );
}

export default App;
