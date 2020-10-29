import React, { Component } from "react"
import "./styles.css";
import { HeaderHome, HomeTabbar } from "../molecules";

export default class extends Component {
    render() {
        return (
            <div className="Categories">
                <HeaderHome />
                <HomeTabbar />
            </div>
        );
    }
}