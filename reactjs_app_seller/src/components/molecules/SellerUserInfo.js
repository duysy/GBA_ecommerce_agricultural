import React, { Component } from "react";
import {} from "../../contract/rawData"
import { Link } from "react-router-dom"
import "./styles.css"
export default class extends Component {
    render() {
        return (
            <div className="SellerUserInfo">
                <div className="SellerUserInfo-info">
                    <i className="fa fa-user-circle"></i>
                    <nav>duysyshop</nav>
                </div>
                <div className="SellerUserInfo-overview">
                    <div className="SellerUserInfo-product">
                        <nav>0</nav>
                        <nav>Sản phẩm</nav>
                    </div>
                    <div className="SellerUserInfo-order">
                        <nav>0</nav>
                        <nav>Đơn hàng</nav>
                    </div>
                </div>
            </div>
        )
    }
}