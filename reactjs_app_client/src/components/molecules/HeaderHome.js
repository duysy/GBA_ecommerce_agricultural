import React, { Component } from "react";
import "./styles.css"

export default class extends Component {
    render() {
        return (
            <div className="headerHome">
                <div className="headerHome-search-input">
                    <input type="text" placeholder="Search in XXXX"/>
                </div>
                <div className="headerHome-search-button">
                    <button type="button">
                    <i className="fa fa-search"></i>
                    </button>
                </div>

            </div>
        );
    }
}