import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"

const Login = () => {
    return (
        <div className="login row">
            <div className="login-content col-6">
                <div className="login-title">
                    Welcome to Shop App
                </div>
                <form className="login-form">
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email@gmail.com" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" />
                        {/* <span className="toggle-password float-end">Show</span> */}
                    </div>
                    <button className="form-btn" type="submit" >Login</button>
                </form>
                <a href="#">Create Account</a>
                <a href="#">Forgot Password</a>
            </div>
            <div className="logo-login col-6">
                <div className="shop-name">Shop App</div>
                <img src="./logo.png" className="logo-img" />
            </div>
        </div>
    );
};

export default Login;