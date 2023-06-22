import logo from './logo.svg';
import './App.css';
import Students from './components/Students/Students';

function App() {
  const name = "Do Dinh Thang";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {name.toUpperCase()}
        </a>
        <p style={{
          fontSize: "20px",
          color: "orange",
        }}>
          MindX Tecnology School
        </p>
      </header>
      <h1>Dự án quản lý học sinh</h1>
      <Students />
    </div>

  );
}

export default App;
