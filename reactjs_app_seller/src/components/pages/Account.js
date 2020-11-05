import React, { Component } from "react";
import "./styles.css";
import { SellerTool, SellerUserInfo, HomeTabbar } from "../molecules";
import { Link } from "react-router-dom";

export default class extends Component {
    render() {
        return (
            <div className="Account">
                <HomeTabbar />
                <SellerUserInfo />
                <div className="AccountMain">
                    <Link to="/EditSellerInfo" >Thông tin tài khoản</Link>
                    <nav>
                        <b>Địa chỉ ví của bạn:</b><br />
                        <Link to="/">0x54BD5967aB40D1f4F3719412DBFa2237E7Cb3</Link>
                    </nav>
                    <Link to="/" >Ngôn ngữ</Link>
                    <button>Đăng xuất</button>
                </div>

            </div>
        )
    }
}