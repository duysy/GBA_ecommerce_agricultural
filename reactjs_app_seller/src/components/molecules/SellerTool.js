import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./styles.css"
export default class extends Component {
    render() {
        return (
            <div className="SellerTool">
                <h3>Công Cụ</h3>
                <div className="SellerToolContainer">
                    <div className="SellerToolIteam">
                        <Link to="/">
                            <i className="las la-file-alt"></i>
                            <nav>Đơn Hàng</nav>
                        </Link>
                    </div>
                    <div className="SellerToolIteam">
                        <Link to="/AddProduct">
                            <i className="las la-plus"></i>
                            <nav>Thêm sản phẩm</nav>
                        </Link>

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