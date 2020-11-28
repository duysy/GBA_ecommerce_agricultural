import React,{Component} from "react"
import "./styles.css";

export default class extends Component {
    render() {
        return(
            <div className="AccountForLogin">
                <form action="" className="AccountLoginForm">
                    <div className="AccountInputGroup">
                        <input type="text" id="AccountUsernameInput"/>
                        <label htmlFor="AccountUsernameInput">Số điện thoại hoặc email</label>
                    </div>
                    <div className="AccountInputGroup">
                        <input type="password" id="AccountPasswordInput"/>
                        <label htmlFor="AccountPasswordInput">Mật khẩu</label>
                    </div>
                    <div className="AccountInputGroup AccountGroupForgotPassword">
                        <a href="#">Quên mật khẩu?</a>
                    </div>
                    <button type="submit" className="AccountLoginBtn">ĐĂNG NHẬP</button>
                </form>
                <div className="AccountLoginLine">
                        <span>HOẶC</span>
                </div>
                <div className="AccountLoginChangeWay">
                    <button>Đăng nhập với SMS</button>
                </div>
                <div className="AccountLoginBySocialite">
                    <div className="AccountLoginBySocialiteItem AccountLoginByFacebook">
                        <img src="https://laz-img.alicdn.com/tfs/TB1wGErw7T2gK0jSZPcXXcKkpXa-96-96.png" alt=""/>
                        <div>Facebook</div>
                    </div>
                    <div className="AccountLoginBySocialiteItem AccountLoginByGoogle">
                        <img src="https://laz-img.alicdn.com/tfs/TB1_TgtwVP7gK0jSZFjXXc5aXXa-92-92.png" alt=""/>
                        <div>Google</div>
                    </div>
                </div>
            </div>
        );
    }
}