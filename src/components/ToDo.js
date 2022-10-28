// functions start with a capital letter to differentiate it from the built-in HTML elements.
function ToDo(props) {
  return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn">DELETE</button>
        </div>
      </div>
  );
}

export default ToDo;
