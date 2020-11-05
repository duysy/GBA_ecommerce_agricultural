import React, { Component } from "react";
import "./styles.css";
import { SellerTool, SellerUserInfo, HomeTabbar } from "../molecules";

export default class extends Component {
    render() {
        return (
            <div className="Login">
                <HomeTabbar />
                <div className="LoginMain">
                    <h1>Đăng nhập</h1>
                    <nav>Vui lòng khóa cá nhân chỉ ví</nav>
                    <input type="password" name="privateKey" placeholder="0x54BD5967aB40D1f4" />
                    <nav>Vui lòng nhập mật khẩu giải mã</nav>
                    <input type="password" placeholder="XXXXXX" />
                    <button>Đăng nhập</button>
                </div>

            </div>
        )
    }
}