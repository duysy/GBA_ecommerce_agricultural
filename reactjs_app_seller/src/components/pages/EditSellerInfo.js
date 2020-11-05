import React, { Component } from "react";
import "./styles.css";
import {Editter,HomeTabbar} from "../molecules";

export default class extends Component {
    render() {
        return (
            <div className="EditSellerInfo">
                <HomeTabbar/>
                <div className="EditSellerInfonMain">
                    <h2>Chỉnh sửa thông tin tài khoản</h2>
                    <nav>Tên truy cập</nav>
                    <input type="text" placeholder="Nguyen Van A/vana123" />
                    <nav>Địa chỉ</nav>
                    <input type="text" placeholder="Da Nang" />
                    <nav>Số điện thoại</nav>
                    <input type="text" placeholder="034545xxxxxx" />
                    <nav>Khác</nav>
                    <Editter/>
                    <button>Đăng nhập</button>
                </div>
            </div>
        )
    }
}