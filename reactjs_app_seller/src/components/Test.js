import React, { Component } from "react"
import { TestAtom } from "./atoms";
import { SellerTool, SellerUserInfo, HomeTabbar } from "./molecules";
import { TestPages, Login } from "./pages";

export default class extends Component {
    render() {
        return ( <
            div >
            <
            SellerUserInfo / >
            <
            SellerTool / >
            <
            HomeTabbar / >
            <
            /div>
        );
    }
}