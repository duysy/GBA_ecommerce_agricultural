import React, { Component } from "react";
import "./styles.css"
export default class extends Component {
    render() {
        return (
            <div className="SellerTool">
                <h3>Công Cụ</h3>
                <div className="SellerToolContainer">
                    <div className="SellerToolIteam">
                        <i className="las la-file-alt"></i>
                        <nav>Đơn Hàng</nav>
                    </div>
                    <div className="SellerToolIteam">
                        <i className="las la-plus"></i>
                        <nav>Thêm sản phẩm</nav>
                    </div>
                    <div className="SellerToolIteam">
                        <i className="fa fa-user-circle"></i>
                        <nav>Đơn Hàng</nav>
                    </div>
                    <div className="SellerToolIteam">
                        <i className="fa fa-user-circle"></i>
                        <nav>Đơn Hàng</nav>
                    </div>
                </div>
            </div>
        )
    }
}