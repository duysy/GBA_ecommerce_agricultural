import react, { Component } from "react"
import "./styles.css"
import { HeaderHome, HomeTabbar, ProductDetails } from "../molecules";

export default class extends Component {
    render() {
        return(
            <div className="ProductDetails">
                <HeaderHome />
                <ProductDetails />
                <HomeTabbar />
            </div>
        )
    }
}