import ToDo from './components/ToDo';


// Now this component, as it's called in Reacts world this custom HTML element, is in the end just a function. A function which is defined and exported, and specifically a function that returns JSX.
// so a function that should act as a component and be usable as a component by React must return something that can be rendered in the browser.
function App() {
  return (
    <div>
      <h2>To Do!</h2>
      <ToDo text="understand props"/>
      <ToDo text="Learn NextJS"/>
      <ToDo text="Eat pizza"/>
      <ToDo text="Make badass websites"/>
    </div>
  );
}

export default App;
