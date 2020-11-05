import React, { Component } from "react";
import "./styles.css"
import { Link } from "react-router-dom"

export default class extends Component {
    render() {
        return (
            <nav className="HomeTabbar">
                <Link to="/">
                    <i className="fa fa-home"></i>
                    <nav>Home</nav>
                </Link>
                <Link to="/">
                    <i className="las la-comments"></i>
                    <nav>Messenger</nav>
                </Link>
                <Link to="/">
                    <i className="las la-inbox"></i>
                    <nav>Cart</nav>
                </Link>
                <Link to="/Account">
                    <i className="fa fa-user-circle"></i>
                    <nav>Account</nav>
                </Link>
            </nav>
        );
    }
}