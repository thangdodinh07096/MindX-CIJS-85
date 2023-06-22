import logo from './logo.svg';
import './App.css';
import Task from './Task';

function App() {
  return (
    <div className="App">
      <input className="input" type="text" placeholder="Enter your task here..." />
      <Task task="Clean up badroom" />
      <Task task="Buy some milk" />
      <Task task="Jogging" />
      <Task task="Learn React" />
      <Task task="Doing excercises" />
      <div className="footer">
        <p>5 tasks left!</p>
        <p>MindX todolist</p>
      </div>
    </div >
  );
}

export default App;
