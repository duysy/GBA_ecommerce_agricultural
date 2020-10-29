import React, { Component } from "react";
import "./styles.css"
import { Link } from "react-router-dom"

export default class extends Component {
    render() {
        return (
            <nav className="HomeTabbar">
                <Link to="/">
                    <i class="fa fa-home"></i>
                    <nav>Home</nav>
                </Link>
                <Link to="/Categories"><i class="fa fa-align-justify"></i>
                    <nav>Categories</nav>
                </Link>
                <Link to="/Cart">
                    <i class="fa fa-shopping-cart"></i>
                    <nav>Cart</nav>
                </Link>
                <Link to="/Account">
                <i class="fa fa-user-circle"></i>
                    <nav>Account</nav>
                </Link>
            </nav>
        );
    }
}