import './App.css';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import ForgotPassword from './Auth/ForgotPassword/Forgotpassword';


function App() {
  return (
    <div className="App">
      <Register />
      <Login />
      <ForgotPassword />
    </div>
  );
}

export default App;
