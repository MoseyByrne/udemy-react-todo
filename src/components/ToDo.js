import { useState } from 'react';
// useState is a React Hook and we can use React Hooks in React component functions.
//useState(true) or useState(false) whether we want to start with the Modal open or not
// useState always returns an array with exactly 2 elements

// functions start with a capital letter to differentiate it from the built-in HTML elements.
// {} within the JSX allows you to use regular JS. 
function ToDo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {}
// we point to the function by using it's name in the onClick, but without () because that would call the function as soon as it's read
  return (
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>DELETE</button>
        </div>
      </div>
  );
}

export default ToDo;
