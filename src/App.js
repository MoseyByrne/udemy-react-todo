// Now this component, as it's called in Reacts world this custom HTML element, is in the end just a function. A function which is defined and exported, and specifically a function that returns JSX.
// so a function that should act as a component and be usable as a component by React must return something that can be rendered in the browser.
function App() {
  return (
    <div>
      <h2>To Do!</h2>
      <div className="card">
        <h2>TITLE</h2>
        <div className="actions">
          <button className="btn">DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
