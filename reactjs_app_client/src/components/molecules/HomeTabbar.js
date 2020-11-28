import React, { Component } from "react";
import "./styles.css"
import { Link } from "react-router-dom"

export default class extends Component {
    render() {
        return (
            <nav className="HomeTabbar">
                <Link to="/">
                    <i class="fa fa-home"></i>
                    <nav>Trang chủ</nav>
                </Link>
                <Link to="/Categories"><i class="fa fa-align-justify"></i>
                    <nav>Danh mục</nav>
                </Link>
                <Link to="/Cart">
                    <i class="fa fa-shopping-cart"></i>
                    <nav>Giỏ</nav>
                </Link>
                <Link to="/Account">
                <i class="fa fa-user-circle"></i>
                    <nav>Tài khoản</nav>
                </Link>
            </nav>
        );
    }
}