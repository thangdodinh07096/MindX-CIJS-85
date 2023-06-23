import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import "./ForgotPassword.css"

const ForgotPassword = () => {
    return (
        <div className="forgotPassword row">
            <div className="logo col-6">
                <div className="shop-name">Shop App</div>
                <img src="./logo.png" className="logo-img" />
            </div>
            <div className="forgotPassword-content col-6">
                <div className="forgotPassword-title">
                    Forgot Password?
                </div>
                <p>Please enter your email to recover your password</p>
                <form className="forgotPassword-form">
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email@gmail.com" />
                        {/* <span className="toggle-password float-end">Send code</span> */}
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" name="code" placeholder="Code" />
                    </div>
                    <button className="form-btn" type="submit" >Recover Password</button>
                </form>
                <a href="#">Login</a>
            </div>
        </div>
    );
};

export default ForgotPassword;