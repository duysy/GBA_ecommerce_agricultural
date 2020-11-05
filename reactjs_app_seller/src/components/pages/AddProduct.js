import React, { Component } from "react";
import "./styles.css";
import { Editter, HomeTabbar } from "../molecules";

export default class extends Component {
    render() {
        return (
            <div className="EditUserInfo">
                <HomeTabbar />
                <div className="EditUserInfonMain">
                    <h2>Thêm sản phẩm</h2>
                    <nav>Tên sản phẩm</nav>
                    <input type="text" placeholder="Tiêu Quảng Trị" />
                    <nav>Giá</nav>
                    <input type="text" placeholder="75.000" />
                    <nav>Đơn vị</nav>
                    <input type="text" placeholder="Kg/Lượng/Cái/Bịch/Hũ" />
                    <nav>Danh mục</nav>
                    <input type="text" placeholder="Hồ tiêu" />
                    <nav>Vị trí</nav>
                    <input type="text" placeholder="Đà Nẵng" />
                    <nav>Chi tiết</nav>
                    <Editter />
                    <button>Đăng nhập</button>
                </div>
            </div>
        )
    }
}