import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default class extends Component {
    render() {
        return (
            <nav className="CardHeader">
                <h1>{this.props.children}</h1>
                <Link to="#">Xem thêm</Link>
            </nav>
        );
    }
}