import react, { Component } from "react";
import { HeaderHome, BannerSliderWrap, HomeTabbar, CardHeader, CardProductItem, Cart, Account } from "../molecules";
import "./styles.css"

export default class extends Component {
    render() {
        return (
            <div className="Account">
                <HeaderHome />
                <Account/>
                <HomeTabbar />
            </div>
        )
    }
}