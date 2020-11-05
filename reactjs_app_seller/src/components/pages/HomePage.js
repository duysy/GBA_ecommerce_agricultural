import React, { Component } from "react";
import "./styles.css";
import { SellerTool, SellerUserInfo, HomeTabbar } from "../molecules";

export default class extends Component {
    render() {
        return (
            <div>
                <SellerUserInfo />
                <SellerTool />
                <HomeTabbar />
            </div>
        )
    }
}