import logo from './logo.svg';
import './App.css';
import NameCard from './Category';

function App() {
  return (
    <div className="App">
      <NameCard name="Alice" age="20" />
      <NameCard name="Bob" age="19" />
      <NameCard name="Cris" age="21" />
      <NameCard name="Thắng" age="25" />
      <NameCard name="Thu" age="20" />
      <NameCard name="Châu" age="25" />
    </div>
  );
}

export default App;
